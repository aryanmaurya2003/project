import React from "react";
import NavBar from "../commonComponent/NavBar";
import Sidebar from "../pages/Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../commonComponent/Footer";
function Dashboard() {
  const isToggle = useSelector((state) => state.toggle.value);
  return (
    <div className="h-screen">
      <div className=" h-18">
        <NavBar />
      </div>
      <div className="flex w-full overflow-x-hidden ">
        <div
          className={`  max-h-[calc(100vh-72px)] border-r border-slate-300 ${
            !isToggle ? "w-[17%]" : "w-[84px]"
          } ease-in-out duration-200`}
        >
          {" "}
          <Sidebar/>{" "}
        </div>
        <div
          className={`w-[83%] overflow-y-scroll h-[calc(100vh-73px)] bg-slate-200 ${
            !isToggle ? "w-[80%]" : "w-[95%]"
          }  ease-in-out duration-200  `}
        >
          {" "}
          <div className="h-full ">
            {" "}
            <Outlet  />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
