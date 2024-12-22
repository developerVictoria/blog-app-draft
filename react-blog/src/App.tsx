
import Homepage from './Components/Homepage/Homepage.tsx'
import Login from "./Components/Login.tsx"
import { useSelector } from 'react-redux'
import { selectUserData } from './feature/UserSlice.tsx'


function App() {
  const userData = useSelector(selectUserData);
  return (

    <div className='app'>
      <div className='home__page'>
        <div>{userData != null ? <Homepage /> : <Login />}</div>
      </div>
    </div>
  )
}

export default App
