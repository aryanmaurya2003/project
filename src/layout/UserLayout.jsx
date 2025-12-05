import React from "react";
import { Outlet } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";


function UserLayout() {
const location=useLocation().pathname.split("/").slice(2);

console.log(location)

  return (
    <div className="h-full w-full">
      <div className="flex items-center text-gray-600 mt-4 ml-3">
        <GoHome className="text-blue-700 mr-2 mb-0.5"/>&gt;
        {location.map((item,index)=>(
          <span key={index} className="ml-3">{item} {index!==location.length-1 && <span className="ml-2">&gt;</span>}</span>
        ))}
      </div>

      <div className="mt-4">
        {" "}
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
