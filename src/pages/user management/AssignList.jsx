import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowCircleLeft } from "react-icons/fa";

const data = [
  { id: 1,  accountId: "account1" },
  { id: 2,  accountId: "account2" },
  { id: 3,  accountId: "account3" },
  { id: 4,  accountId: "account4" },
  { id: 5,  accountId: "account5" },
  { id: 6,  accountId: "account6" },
  { id: 7,  accountId: "account7" },
  { id: 8,  accountId: "account8" },
  { id: 9,  accountId: "account9" },
  { id: 10, accountId: "account10" },
  { id: 11, accountId: "account11" },
  { id: 12, accountId: "account12" },
  { id: 13, accountId: "account13" },
  { id: 14, accountId: "account14" },
  { id: 15, accountId: "account15" },
];

function AssignList() {
  const [searchLeft, setSearchLeft] = useState("");
  const [searchRight, setSearchRight] = useState("");
  const [selectedLeft, setSelectedLeft] = useState(new Set());
  const [selectedRight, setSelectedRight] = useState(new Set());
  const [assignedItems, setAssignedItems] = useState([]);

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
      setSelectedLeft(new Set(filteredAvailable.map(item => item.id)));
    }
  };

  const selectAllRight = () => {
    if (selectedRight.size === filteredAssigned.length) {
      setSelectedRight(new Set());
    } else {
      setSelectedRight(new Set(filteredAssigned.map(item => item.id)));
    }
  };

  const moveToRight = () => {
    const itemsToMove = data.filter(item => selectedLeft.has(item.id));
    setAssignedItems([...assignedItems, ...itemsToMove]);
    setSelectedLeft(new Set());
  };

  const moveToLeft = () => {
    const itemsToRemove = new Set(selectedRight);
    setAssignedItems(assignedItems.filter(item => !itemsToRemove.has(item.id)));
    setSelectedRight(new Set());
  };

  const availableItems = data.filter(item => !assignedItems.find(assigned => assigned.id === item.id));

  const filteredAvailable = availableItems.filter(item => 
    item.accountId.toLowerCase().includes(searchLeft.toLowerCase())
  );
  
  const filteredAssigned = assignedItems.filter(item => 
    item.accountId.toLowerCase().includes(searchRight.toLowerCase())
  );

  return (
    <div>
      <div className="w-[78%] h-150 border border-slate-300 flex justify-between p-5 mx-auto mt-8">
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
            <div className="border-b border-slate-300 h-10 cursor-pointer" onClick={selectAllLeft}>
              <input 
                type="checkbox" 
                className="mx-5 mt-2" 
                checked={selectedLeft.size === filteredAvailable.length && filteredAvailable.length > 0}
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
                {availableItems.length === 0 ? "No accounts available" : "No matching accounts"}
              </div>
            )}
          </div>
        </div>

        <div className="w-[9%] h-full  grid place-content-center gap-42">
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
            <div className="border-b border-slate-300 h-10 cursor-pointer" onClick={selectAllRight}>
              <input 
                type="checkbox" 
                className="mx-5 mt-2" 
                checked={selectedRight.size === filteredAssigned.length && filteredAssigned.length > 0}
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
                {assignedItems.length === 0 ? "No accounts assigned" : "No matching accounts"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignList;
