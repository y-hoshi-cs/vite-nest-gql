import './App.css'
import { useUsersQuery, UserFindBy } from './generated/graphql';

function App() {
  const { loading, data, refetch } = useUsersQuery({});
  return (
    <div className="wrapper">
      {loading && <div className='loading'></div>}
      {data && data.users.length > 0 && data.users.map((user: any, idx: number) => (
        <div key={idx}>{user.name}</div>
      ))}
      <button onClick={() => refetch({ skip: 0, take: 20, searchString: "", findBy: [UserFindBy.Name] })}>Load!</button>
    </div>
  )
}

export default App
