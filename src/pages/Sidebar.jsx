import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrUserSettings } from "react-icons/gr";
import { SiCompilerexplorer } from "react-icons/si";
import { MdAccountBalance } from "react-icons/md";
import { FaAws } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const SideElement = [
  {
    id: 1,
    name: "User",
    icon: <GrUserSettings className=" inline w-6 h-6 " />,
    link: "/dashboard/user",
  },
  {
    id: 2,
    name: "Onboarding",
    icon: <MdAccountBalance className=" inline w-6 h-6 " />,
    link: "/dashboard/onboard",
  },
  {
    id: 3,
    name: "Cost Explorer",
    icon: <SiCompilerexplorer className=" inline w-6 h-6 " />,
    link: "/dashboard/costExplorer",
  },
  {
    id: 4,
    name: "Aws Service",
    icon: <FaAws className=" inline w-6 h-6 " />,
    link: "/dashboard/aws",
  },
];

function Sidebar() {
  const [active, setActive] = useState(1);
  const [size, setSize] = useState({width: window.innerWidth,});
  const isToggle = useSelector((state) => state.toggle.value);
  console.log("data---", isToggle);

  return (
    <div className={` lg:w-full h-full ${!isToggle ? "p-10" : "pt-10"} `}>
      {SideElement.map((items) => (
        <div
          className="group  focus:bg-blue-100 "
          key={items.id}
          onClick={() => {
            setActive(items.id);
          }}
        >
          <Link to={items.link} className="ml-3 flex flex-row  ">
            <div
              className={` ${
                !isToggle ? "w-full group-hover:bg-blue-100 mt-2 " : "mt-4 ml-2"
              }  h-15 flex items-center rounded-sm   ease-in duration-300 ${
                active === items.id ? (!isToggle ? "bg-blue-200" : "") : ""
              }`}
            >
              <div
                className={`w-11 h-11  flex  justify-center items-center   ${
                  !isToggle ? "ml-5 " : "scale-110"
                }  rounded-md  group-hover:bg-blue-400 group-hover:text-white ease-in duration-200 ${
                  active === items.id ? "bg-blue-400 text-white" : ""
                }`}
              >
                {items.icon}
              </div>
              <span
                className={`ml-5 text-xl  items-center  ${
                  !isToggle ? "flex " : "hidden"
                }`}
              >
                {items.name}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
