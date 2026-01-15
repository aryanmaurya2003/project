import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrUserSettings } from "react-icons/gr";
import { SiCompilerexplorer } from "react-icons/si";
import { MdAccountBalance } from "react-icons/md";
import { FaAws } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllAccountList } from "../API/account.api";
import { toast } from "react-toastify";

const SideElement = [
  {
    id: "user",
    name: "User",
    icon: <GrUserSettings className=" inline w-6 h-6 " />,
    link: "/dashboard/user",
    role: ["admin", "read_Only"],
  },
  {
    id: "onboard",
    name: "Onboarding",
    icon: <MdAccountBalance className=" inline w-6 h-6 " />,
    link: "/dashboard/onboard",
    role: ["admin", "read_Only"],
  },
  {
    id: "costExplorer?group=SERVICE",
    name: "Cost Explorer",
    icon: <SiCompilerexplorer className=" inline w-6 h-6 " />,
    link: "/dashboard/costExplorer?group=SERVICE",
    role: ["admin", "read_Only", "customer"],
  },
  
];

function Sidebar() {
  const path = useLocation().pathname.split("/")[2];
  const [active, setActive] = useState(path);
  const isToggle = useSelector((state) => state.toggle.value);
  const userRole = useSelector((state) => state.user.value.role);
  
  const [isOpen, setIsOpen] = useState(false);

 

  const clickHandler = (id) => {
    setIsOpen(!isOpen);
    isOpen
    if (id === "costExplorer") {
      fetchAccounts();
    }
  };

  


  return (
    <div className={` lg:w-full h-full ${!isToggle ? "p-5" : "pt-10"} `}>
      {SideElement.map((items) => {
        if (items.role.includes(userRole)) {
          return (
            <div
              className="group focus:bg-blue-100"
              key={items.id}
              onClick={() => {
                setActive(items.id);
              }}
            >
              <Link to={items.link} className="ml-3 flex flex-row">
                <div
                  className={` ${
                    !isToggle
                      ? "w-full group-hover:bg-blue-100 mt-2 "
                      : "mt-4 ml-2"
                  }  h-15 flex items-center rounded-sm ease-in duration-300 ${
                    active === items.id ? (!isToggle ? "bg-blue-200" : "") : ""
                  }`}
                  onClick={() => {
                    clickHandler(items.id);
                  }}
                >
                  <div
                    className={`w-11 h-11 flex justify-center items-center ${
                      !isToggle ? "ml-5 " : "scale-110"
                    } rounded-md group-hover:bg-blue-400 group-hover:text-white ease-in duration-200 ${
                      active === items.id ? "bg-blue-400 text-white" : ""
                    }`}
                  >
                    {items.icon}
                  </div>
                  <span
                    className={`ml-5 text-xl items-center ${
                      !isToggle ? "flex " : "hidden"
                    }`}
                  >
                    {items.name}
                  </span>
                </div>
              </Link>
              
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default Sidebar;
