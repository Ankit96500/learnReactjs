
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login  from "./Components/Login"
import Profile  from './Components/Profile'

function App() {


  return (
    <UserContextProvider>
      <div>
        <h4>
        Click on the Vite and React logos to learn more
        </h4>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App
