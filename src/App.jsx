import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard'
import UserCreation from './pages/user management/userCreation'
import Onboarding from './pages/onboarding/Onboarding'
import AwsService from './pages/aws service/AwsService'
import CostExplorer from './pages/Cost explorer/costExplorer'
import UserListing from './pages/user management/UserListing'
import UserEdit from './pages/user management/userEdit'


function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>} >

    <Route path='addUser' element={<UserCreation/>} />
    <Route path='onboard' element={<Onboarding/>} />
    <Route path='aws' element={<AwsService/>} />
    <Route path='costExplorer' element={<CostExplorer/>} />
    <Route path='' element={<UserListing/>} />
    <Route path='editUser' element={<UserEdit/>} />


    </Route>
    
   

    <Route path='/login' element={<h1>wrong route </h1>}/>
    
    
    </Routes>
    </>
  )
}

export default App
