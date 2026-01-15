import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowCircleLeft } from "react-icons/fa";
import { getAllAccountList } from "../../API/account.api";
import { GetAssigendAccounts } from "../../API/User.api";
import { toast } from "react-toastify";

function AssignList({ setAssignedAccounts, userid }) {
  const [searchLeft, setSearchLeft] = useState("");
  const [searchRight, setSearchRight] = useState("");
  const [selectedLeft, setSelectedLeft] = useState(new Set());
  const [selectedRight, setSelectedRight] = useState(new Set());
  const [assignedItems, setAssignedItems] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await getAllAccountList();
        
        if (response.status === 401) {
          window.location.href = "/";
          return;
        }

        if (response.status === 200 && response.data?.accounts) {
          const transformedData = response.data.accounts.map((account, index) => ({
            id: account.id || index + 1,
            accountId: account.accountName, 
            awsId: account.awsId,           
            arnName: account.arnName,       
          }));

          if (userid) {
            try {
              const response1 = await GetAssigendAccounts(userid);
              console.log("Assigned accounts response:", response1);

              if (response1.status === 401) {
                window.location.href = "/";
                return;
              }

              if (response1.status === 200 && response1.data?.accounts && response1.data.accounts.length > 0) {
                const assignedAccountsData = response1.data.accounts.map((account) => ({
                  id: account.id,
                  accountId: account.accountName,
                  awsId: account.awsId,
                  arnName: account.arnName,
                }));
                
                const filteredAvailableData = transformedData.filter(
                  (item) => !assignedAccountsData.find((assigned) => assigned.id === item.id)
                );
                
                setData(filteredAvailableData);
                setAssignedItems(assignedAccountsData);
                setAssignedAccounts(assignedAccountsData.map(account => account.id));
              } else {
                setData(transformedData);
                setAssignedItems([]);
                setAssignedAccounts([]);
              }
            } catch (assignedError) {
              console.log("No assigned accounts found or error:", assignedError);
              setData(transformedData);
              setAssignedItems([]);
              setAssignedAccounts([]);
            }
          } else {
            setData(transformedData);
            setAssignedItems([]);
            setAssignedAccounts([]);
          }

          toast.success(response.data.message);
        }
      } catch (error) {
        console.error("Error fetching accounts:", error);
        toast.error("Failed to fetch accounts");
      }
    };

    fetchAll();
  }, [userid]);

  const toggleLeft = (id) => {
    const newSelected = new Set(selectedLeft);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedLeft(newSelected);
  };

  const toggleRight = (id) => {
    const newSelected = new Set(selectedRight);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRight(newSelected);
  };

  const selectAllLeft = () => {
    if (selectedLeft.size === filteredAvailable.length) {
      setSelectedLeft(new Set());
    } else {
      setSelectedLeft(new Set(filteredAvailable.map((item) => item.id)));
    }
  };

  const selectAllRight = () => {
    if (selectedRight.size === filteredAssigned.length) {
      setSelectedRight(new Set());
    } else {
      setSelectedRight(new Set(filteredAssigned.map((item) => item.id)));
    }
  };

  const moveToRight = () => {
    const itemsToMove = data.filter((item) => selectedLeft.has(item.id));
    const newData = data.filter((item) => !selectedLeft.has(item.id));
    const newAssignedItems = [...assignedItems, ...itemsToMove];
    setData(newData);
    setAssignedItems(newAssignedItems);
    setAssignedAccounts(newAssignedItems.map((e) => e.id));
    setSelectedLeft(new Set());
  };

  const moveToLeft = () => {
    const itemsToMove = assignedItems.filter((item) => selectedRight.has(item.id));
    const newAssignedItems = assignedItems.filter(
      (item) => !selectedRight.has(item.id)
    );
    const newData = [...data, ...itemsToMove];
    setData(newData);
    setAssignedItems(newAssignedItems);
    setAssignedAccounts(newAssignedItems.map((e) => e.id));
    setSelectedRight(new Set());
  };

  const availableItems = data.filter(
    (item) => !assignedItems.find((assigned) => assigned.id === item.id)
  );

  const filteredAvailable = availableItems.filter((item) =>
    item.accountId?.toLowerCase().includes(searchLeft.toLowerCase())
  );

  const filteredAssigned = assignedItems.filter((item) =>
    item.accountId?.toLowerCase().includes(searchRight.toLowerCase())
  );

  return (
    <div>
      <div className="w-[78%] h-150 border border-slate-300 flex justify-between p-5 mt-8 bg-white">
        <div className="w-[45%] h-full border">
          <div className="bg-[#e8f1ff] text-lg font-bold h-10 flex justify-between items-center">
            <p className="ml-2">Choose Account Id to Associate</p>
            <p className="mr-2">{availableItems.length} Available</p>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchLeft}
              onChange={(e) => setSearchLeft(e.target.value)}
              className="w-full border-b border-slate-400 h-12 pl-9 pr-3 focus:outline-none"
            />
            {!searchLeft && (
              <IoSearchOutline className="absolute left-3 top-3.5 text-gray-400 text-lg" />
            )}
          </div>

          {filteredAvailable.length > 0 ? (
            <div
              className="border-b border-slate-300 h-10 cursor-pointer"
              onClick={selectAllLeft}
            >
              <input
                type="checkbox"
                className="mx-5 mt-2"
                checked={
                  selectedLeft.size === filteredAvailable.length &&
                  filteredAvailable.length > 0
                }
                onChange={() => {}}
              />
              <span className="font-medium">Select All</span>
            </div>
          ) : null}

          <div className="h-[427px] overflow-y-auto">
            {filteredAvailable.length > 0 ? (
              filteredAvailable.map((item) => (
                <div
                  className="border-b border-slate-300 h-10 flex items-center cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleLeft(item.id)}
                  key={item.id}
                >
                  <input
                    type="checkbox"
                    checked={selectedLeft.has(item.id)}
                    onChange={() => {}}
                    className="mx-5 mt-1 scale-110"
                  />
                  <span className="font-medium mt-1">{item.accountId}</span>
                </div>
              ))
            ) : (
              <div className="p-4 text-gray-500 text-center">
                {availableItems.length === 0
                  ? "No accounts available"
                  : "No matching accounts"}
              </div>
            )}
          </div>
        </div>

        <div className="w-[9%] h-full grid place-content-center gap-42">
          <FaArrowCircleLeft
            className="rotate-180 scale-[2.2] cursor-pointer hover:text-blue-600"
            onClick={moveToRight}
          />
          <FaArrowCircleLeft
            className="scale-[2.2] cursor-pointer hover:text-blue-600"
            onClick={moveToLeft}
          />
        </div>

        <div className="w-[45%] h-full border">
          <div className="bg-[#e8f1ff] text-lg font-bold h-10 flex justify-between items-center">
            <p className="ml-2">Assigned Account Ids</p>
            <p className="mr-2">{assignedItems.length} Assigned</p>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchRight}
              onChange={(e) => setSearchRight(e.target.value)}
              className="w-full border-b border-slate-400 h-12 pl-9 pr-3 focus:outline-none"
            />
            {!searchRight && (
              <IoSearchOutline className="absolute left-3 top-3.5 text-gray-400 text-lg" />
            )}
          </div>

          {filteredAssigned.length > 0 ? (
            <div
              className="border-b border-slate-300 h-10 cursor-pointer"
              onClick={selectAllRight}
            >
              <input
                type="checkbox"
                className="mx-5 mt-2"
                checked={
                  selectedRight.size === filteredAssigned.length &&
                  filteredAssigned.length > 0
                }
                onChange={() => {}}
              />
              <span className="font-medium">Select All</span>
            </div>
          ) : null}

          <div className="h-[427px] overflow-y-auto">
            {filteredAssigned.length > 0 ? (
              filteredAssigned.map((item) => (
                <div
                  className="border-b border-slate-300 h-10 flex items-center cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleRight(item.id)}
                  key={item.id}
                >
                  <input
                    type="checkbox"
                    checked={selectedRight.has(item.id)}
                    onChange={() => {}}
                    className="mx-5 mt-1 scale-110"
                  />
                  <span className="font-medium mt-1">{item.accountId}</span>
                </div>
              ))
            ) : (
              <div className="p-4 text-gray-500 text-center">
                {assignedItems.length === 0
                  ? "No accounts assigned"
                  : "No matching accounts"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignList;
