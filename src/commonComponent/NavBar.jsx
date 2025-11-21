import React, { useState } from 'react'
import cloudKeeper from "../assets/Cloudkeeper_New.svg"
import { TfiMenu } from "react-icons/tfi";
import { AiFillCaretDown } from "react-icons/ai";
import { LuUsers, LuInfo } from "react-icons/lu";
import { VscSignOut } from "react-icons/vsc";
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { toggleChange } from '../pages/feature/toggle/toggleSlice';

function NavBar() {
    const dispatch=useDispatch();
    const handleClick = () => {
     dispatch(toggleChange());
    }
    // const value=useSelector((state)=>state.toggle.value);
  
    return (
        <div className='w-full flex h-18 shadow-[0_4px_10px_rgba(0,0,0,0.15)]'>
            <div className='h-full w-[19%] grid place-content-center'><img src={cloudKeeper} /></div>
            <div className='h-full w-[70%] flex justify-between  '>
                <div className='flex items-center gap-7' >
                    <div className='ml-4' onClick={handleClick}> <TfiMenu className='text-blue-800 hover:cursor-pointer' /> </div>
                    <div>
                        <div className='text-[14px] font-bold'>Module</div>
                        <div className=''>Lens <AiFillCaretDown className='inline-block mb-0.5 scale-75 ' /></div>
                    </div>

                </div>
                <div className='flex  items-center gap-7 mr-5   '>
                    <div className=' border border-blue-700 rounded-full h-10 w-10 grid place-content-center '><LuUsers className=' text-blue-700 scale-150 ' /></div>
                    <div className='border-r border-slate-300'>
                        <div className='text-[12px]'>Welcome,</div>
                        <div className='font-bold text-blue-800 mr-5'>Aryn Maurya <LuInfo className='inline-block scale-110 ' /></div>
                    </div>

                </div>
            </div>
            <div className='h-full w-[10%] flex items-center'><div className='w-[120px] h-10 ml-3 border-2 text-blue-700 flex  justify-center items-center font-bold text-[16px] rounded-md'><VscSignOut className='scale-150 mr-3'/>Logout</div></div>

        </div>
    )
}

export default NavBar