import React from 'react'
import NavBar from '../commonComponent/NavBar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <div className='h-screen' >
            <div  className=' h-18' ><NavBar/></div>
            <div className='flex w-full '>
                <div className='w-[20%] h-[calc(100vh-72px)] border-r border-slate-300 '> <Sidebar/> </div>
                <div className='w-[80%] h-[calc(100vh-72px)]  bg-slate-300'> <Outlet/></div>
            </div>

        </div>

)}

export default Dashboard