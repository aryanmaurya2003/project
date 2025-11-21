import React from 'react'
import NavBar from '../commonComponent/NavBar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Dashboard() {
    const isToggle=useSelector((state)=>state.toggle.value);
    return (
        <div className='h-screen' >
            <div  className=' h-18' ><NavBar/></div>
            <div className='flex w-full '>
                <div className={` h-[calc(100vh-72px)] border-r border-slate-300 ${!isToggle?"w-[20%]":"w-[5%]"} ease-in-out duration-200`}> <Sidebar/> </div>
                <div className={`w-[80%] h-[calc(100vh-72px)] bg-slate-200 ${!isToggle?"w-[80%]":"w-[95%]"} ease-in-out duration-200`}> <Outlet/></div>
            </div>

        </div>

)}

export default Dashboard