import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { GrUserSettings } from "react-icons/gr";
import { SiCompilerexplorer } from "react-icons/si";
import { MdAccountBalance } from "react-icons/md";
import { FaAws } from "react-icons/fa";



const SideElement = [{
    id: 1,
    name: "User",
    icon: <GrUserSettings className=' inline w-6 h-6 ' />,
    link: "/dashboard/"
},
{
    id: 2,
    name: "Onboarding",
    icon: <MdAccountBalance className=' inline w-6 h-6 ' />,
    link: "/dashboard/onboard"
},
{
    id: 3,
    name: "Cost Explorer",
    icon: <SiCompilerexplorer className=' inline w-6 h-6 ' />,
    link: "/dashboard/costExplorer"

}, {
    id: 4,
    name: "Aws Service",
    icon: <FaAws className=' inline w-6 h-6 ' />,
    link: "/dashboard/aws"
}]


function Sidebar() {
const [active,setActive]=useState(1);

// console.log("helo bhai isase",active)
    return (
        <div className='h-full p-10  '>
            {SideElement.map((items) => (
                <div className='group  focus:bg-blue-100 ' key={items.id} onClick={()=>{setActive(items.id)}}>
                    <div className={`w-full  h-15 flex items-center rounded-sm grup group-hover:bg-blue-100  ease-in duration-300 ${active===items.id ? "bg-blue-100":""}`}>
                        <Link to={items.link} className='ml-3 flex flex-row '>
                            <div className={`w-11 h-11  flex  justify-center items-center ml-5 rounded-md  group-hover:bg-blue-400 group-hover:text-white ease-in duration-200 ${active===items.id ? "bg-blue-400 text-white":""}`}>
                                {items.icon}</div>
                            <span className='ml-5 text-xl flex items-center' >{items.name}</span>
                        </Link>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Sidebar