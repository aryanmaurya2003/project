import { NavigationOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { RiFolderOpenFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { getAllAccountList } from "../../API/account.api";
import { toast } from "react-toastify";
import Loading from "../../commonComponent/Loading";

function EmptyList() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard/onboard/add");
  };
  return (
    <div>
      <div className="flex justify-center">
        <RiFolderOpenFill className="w-40 h-40 text-blue-800" />
      </div>
      <div className="flex justify-center font-extrabold text-2xl mt-2">
        {" "}
        No Accounts are linked
      </div>
      <div className="flex justify-center text-xl text-slate-400 mt-2">
        Click below to start linking your accounts
      </div>
      <div className="flex justify-center mt-3">
        {" "}
        <button
          className="bg-primary text-white hover:bg-white hover:text-primary hover:border hover:border-primary  w-[150px] h-[40px] flex justify-center items-center rounded-md"
          onClick={handleClick}
        >
          {" "}
          Link Account
        </button>
      </div>{" "}
    </div>
  );
}

function AccountListing() {
  const [accounts, setAccounts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    navigate("/dashboard/onboard/add");
  };

  useEffect(() => {
    async function fetchAccounts() {
      setLoading(true);
      const responseData = await getAllAccountList();
      if (responseData.status == 200) {
        setAccounts(responseData.data.accounts);
        toast.success(responseData.data.message);
        setLoading(false);
      } else if (responseData.status == 401) {
        setLoading(false);
        toast.error(responseData.response.data.message);
        navigate("/")
      }
    }
    fetchAccounts();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-200 bg-white grid place-content-center">
       <Loading className="z-50 " />
      </div>
    );
  }
  

  return (
    <div className="w-[97%] m-auto">
      <div className="mt-5  font-bold text-3xl">Accounts</div>

      <div className="w-full mt-3 bg-white p-5">
        {accounts.length == 0 ? (
          <div className="h-[60vh] grid place-content-center">
            <EmptyList />
          </div>
        ) : (
          <div className="min-h-[60vh] ">
            <div className="flex justify-end ">
              {" "}
              <button
                className="bg-primary text-white hover:bg-white hover:text-primary hover:border hover:border-primary  w-[150px] h-[40px] flex justify-center items-center rounded-md"
                onClick={handleClick}
              >
                {" "}
                Link Account
              </button>
            </div>{" "}
            <table className="w-full border-collapse border border-gray-300 mt-3">
              <thead className="">
                <tr className="bg-[#3a72e4]  text-white">
                  <th className="border border-gray-300 px-4 py-1 text-left text-sm w-20">
                    ID
                  </th>
                  <th className="border border-gray-300 px-4 py-1 text-left text-sm">
                    AWS ID
                  </th>
                  <th className="border border-gray-300 px-4 py-1 text-left text-sm">
                    ARN Name
                  </th>
                  <th className="border border-gray-300 px-4 py-1 text-left text-sm">
                    Account Name
                  </th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-1 text-sm">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-1 text-sm">
                      {account.aws_ID}
                    </td>
                    <td className="border border-gray-300 px-4 py-1 text-sm">
                      {account.arn_Name}
                    </td>
                    <td className="border border-gray-300 px-4 py-1 text-sm">
                      {account.accountName}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountListing;
