import './App.css'
import UserEdit from './components/organisms/UserEdit/UserEdit';

function App() {
  return (
    <div className="wrapper">
      <header></header>
      <div className="container">
        {/* <aside></aside> */}
        <main>
          <UserEdit />
        </main>
      </div>
    </div>
  )
}

export default App
