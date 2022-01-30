import React from 'react'
import Card from './../../atoms/Card/Card';
import Backdrop from './../../atoms/Backdrop/Backdrop';
import FormGroup from '../../molecules/FormGroup/FormGroup';

interface UserModalProps {
  name: string;
  email: string;
  handleInputName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickClose: () => void;
  handleClickCreate: () => void;
}

const UserModal: React.FC<UserModalProps> = ({
  name,
  email,
  handleInputName,
  handleInputEmail,
  handleClickClose,
  handleClickCreate,
}) => {
  return (
    <Backdrop>
      <Card>
        <div className="d-flex column">
          <FormGroup
            htmlFor="user-modal-name"
            label="UserName"
            value={name}
            placeholder="UserName"
            handleInput={handleInputName}
          />
          <FormGroup
            htmlFor="user-modal-email"
            label="Email"
            value={email}
            placeholder="Email"
            handleInput={handleInputEmail}
          />
        </div>
        <div className="d-flex">
          <div className="spacer"></div>
          <button className="btn btn-primary" onClick={handleClickClose}>Close</button>
          <button className="btn btn-primary" onClick={handleClickCreate}>CreateUser</button>
        </div>
      </Card>
    </Backdrop >
  );
}
export default UserModal;