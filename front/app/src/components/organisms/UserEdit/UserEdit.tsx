import React, { useState } from 'react'
import { useUsersQuery, UserFindBy, useCreateUserMutation, AuthType } from './../../../generated/graphql';
import Card from '@atoms/Card/Card';
import Loading from '@atoms/Loading/Loading';
import Table from '@molecules/Table/Table';
import './UserEdit.css';
import UserModal from './UserModal';

interface UserEditProps { }

interface IUserTableRow {
  id: string;
  name: string;
  email: string;
}

const UserEdit: React.FC<UserEditProps> = ({ }) => {
  const [createUserQuery, { loading: ucLoading, data: ucRes }] = useCreateUserMutation();
  const { loading, data, refetch } = useUsersQuery({
    variables: {
      skip: 0,
      searchString: "",
      findBy: [UserFindBy.Name]
    }
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  // table data
  const userKeys = ['name', 'email', 'updatedAt'];
  const userData = data?.users ? data.users.map((user) => {
    return {
      name: user.name,
      email: user.email,
      updatedAt: user.updatedAt,
    }
  }) : [];

  const handlePageChange = (pagenum: number) => {
    setCurrentPage(pagenum);
  }

  const handleInputName = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const closeModal = () => {
    setIsShowModal(false);
  }
  const openModal = () => {
    setIsShowModal(true);
  }

  const createUser = async () => {
    const res = await createUserQuery({ variables: { name, email, authType: AuthType.User } })
    if (res.data) {
      setName('')
      setEmail('')
      refetch()
    }
  }

  return (<>
    <Loading isLoading={loading || ucLoading} />
    {isShowModal && <UserModal
      name={name}
      email={email}
      handleInputName={handleInputName}
      handleInputEmail={handleInputEmail}
      handleClickClose={closeModal}
      handleClickCreate={createUser}
    />}
    <Card classes="d-flex column">
      <div className="d-flex">
        <div className="spacer"></div>
        <button className="btn btn-primary" onClick={openModal}>AddNewUser</button>
      </div>
      <Table
        <IUserTableRow>
        head={userKeys}
        body={userData}
        onPageChange={handlePageChange}
        currentIndex={currentPage}
        countPerPage={10}
      />
    </Card>
  </>
  );
}
export default UserEdit;