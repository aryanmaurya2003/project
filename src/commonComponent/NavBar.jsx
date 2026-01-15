import React, { useEffect, useState, useRef } from "react";
import cloudKeeper from "../assets/Cloudkeeper_New.svg";
import { TfiMenu } from "react-icons/tfi";
import { AiFillCaretDown } from "react-icons/ai";
import { LuUsers, LuInfo } from "react-icons/lu";
import { VscSignOut } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleChange } from "../feature/toggle/toggleSlice";
import { LoaderChange } from "../feature/loading/loading";
import { getAllAccountList } from "../API/account.api";
import { accountsChange } from "../feature/Accounts/Accounts";
import Loading from "./Loading";
import { logoutApi } from "../API/Login.api";
import { toast } from "react-toastify";
function NavBar() {
  const [accoutList, setAccountList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAccounts, setSelectedAccounts] = useState([]);
  const [isLoadingAccounts, setIsLoadingAccounts] = useState(false);
  console.log(selectedAccounts);
  const dropdownRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(toggleChange());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  const fetchAccounts = async () => {
    try {
      setIsLoadingAccounts(true);
      const response = await getAllAccountList();
      if (response.status === 200) {
        if (response.data.accounts.length > 0) {
          setSelectedAccounts([response.data.accounts[0].aws_ID]);
          dispatch(accountsChange([response.data.accounts[0].aws_ID]));
        }
        console.log(response.data.accounts);
        setAccountList(response.data.accounts);
      } else if (response.status === 401) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error fetching account list:", error);
    } finally {
      setIsLoadingAccounts(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const value = useSelector((state) => state.user.value);

  const handleLogout = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const response = await logoutApi();

    if (response.status === 200) {
      toast.success("Logout successful");
      localStorage.removeItem("token");
      localStorage.removeItem("userAuthenticated");
      localStorage.removeItem("userData");
      navigate("/");
    } else if (response.status === 401) {
      navigate("/");
    } else {
      toast.error("Error in logout");
    }
  };

  const handleOpenAccount = () => {
    setIsOpen(!isOpen);
  };
  const handleAddAccount = (id) => {
    setSelectedAccounts((prev) =>
      prev.includes(id)
        ? prev.filter((accountId) => accountId !== id)
        : [...prev, id]
    );
  };

  const handleAccountSubmit = () => {
    dispatch(accountsChange(selectedAccounts));
  };

  return (
    <div className="w-full flex h-18 shadow-[0_4px_10px_rgba(0,0,0,0.15)]">
      <div className="h-full w-[19%] grid place-content-center">
        <img src={cloudKeeper} />
      </div>
      <div className="h-full w-[70%] flex justify-between  ">
        <div className="flex items-center gap-7">
          <div className="ml-4" onClick={handleClick}>
            {" "}
            <TfiMenu className="text-blue-800 hover:cursor-pointer" />{" "}
          </div>
          <div className="relative  ">
            <div className="text-[14px] font-bold">Module</div>
            <div className="" onClick={handleOpenAccount}>
              Accounts{" "}
              <AiFillCaretDown className="inline-block mb-0.5 scale-75 " />
            </div>
          </div>

          {isOpen && (
            <div
              className="absolute top-17 ml-16 bg-white w-64  border-2 min-h-10 z-30"
              ref={dropdownRef}
            >
              <div className="border-b border-slate-300 p-3 font-bold">
                Accounts
              </div>
              <div className="max-h-70 overflow-y-auto overflow-x-hidden ">
                {isLoadingAccounts ? (
                  <Loading className="z-50 " />
                ) : (
                  accoutList.map((account) => (
                    <div
                      key={account.aws_ID}
                      className="p-3 hover:bg-blue-100 hover:cursor-pointer  flex"
                    >
                      <input
                        type="checkbox"
                        checked={selectedAccounts.includes(account.aws_ID)}
                        onChange={() => handleAddAccount(account.aws_ID)}
                      />{" "}
                      <div className="ml-2">{account.aws_ID}</div>
                    </div>
                  ))
                )}
              </div>
              <hr />
              <button
                className="w-full p-2 text-blue-700 font-bold"
                onClick={handleAccountSubmit}
              >
                Add Account
              </button>
            </div>
          )}
        </div>
        <div className="flex  items-center gap-7 mr-5   ">
          <div className=" border border-blue-700 rounded-full h-10 w-10 grid place-content-center ">
            <LuUsers className=" text-blue-700 scale-150 " />
          </div>
          <div className="border-r border-slate-300">
            <div className="text-[12px]">Welcome,</div>
            <div className="font-bold text-blue-800 mr-5">
              {value.firstName && value.lastName
                ? value.firstName + " " + value.lastName
                : "User"}
              <LuInfo className="inline-block scale-110 ml-1 " />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-[10%] flex items-center">
        <button
          onClick={handleLogout}
          className="w-[120px] h-10 ml-3 border-2 text-blue-700 flex justify-center items-center font-bold text-[16px] rounded-md bg-transparent cursor-pointer"
        >
          <VscSignOut className="scale-150 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavBar;
