import { NavigationOutlined } from "@mui/icons-material";
import React from "react";
import { RiFolderOpenFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function AccountListing() {
    const navigate =useNavigate();

    const handleClick=()=>{
    navigate("/dashboard/onboard/add")
    }

  return (
    <div className="w-[97%] m-auto">
      <div className="mt-5  font-bold text-3xl">Accounts</div>
      <div className="w-full h-[60vh] mt-3  grid place-content-center bg-white p-5">
        <div className="flex justify-center"><RiFolderOpenFill className="w-40 h-40 text-blue-800" /></div>
        <div className="flex justify-center font-extrabold text-2xl mt-2"> No Accounts are linked</div>
        <div className="flex justify-center text-xl text-slate-400 mt-2">Click below to start linking your accounts</div>
        <div className="flex justify-center mt-3">
          {" "}
          <button className="bg-primary text-white hover:bg-white hover:text-primary hover:border hover:border-primary  w-[150px] h-[40px] flex justify-center items-center rounded-md" onClick={handleClick}>
            {" "} 
            Link Account
          </button>
        </div>{" "}
      </div>
    </div>
  );
}

export default AccountListing;
