import React, { useEffect, useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import Charts from "./Charts";
import { RxReload } from "react-icons/rx";
import DateCalendarValue from "../../commonComponent/DatePicker";
import { CiCalendarDate } from "react-icons/ci";

const filters = [
  { id: 1, name: "Service" },
  { id: 2, name: "Api Operation" },
  { id: 3, name: "Usage Type" },
  { id: 4, name: "Instace Type" },
  { id: 5, name: "Account ID" },
  { id: 6, name: "Platform" },
  { id: 7, name: "Region" },
  { id: 8, name: "Usage Type Group" },
  { id: 9, name: "Purchase Option" },
  { id: 10, name: "Resource" },
  { id: 11, name: "Change Type" },
  { id: 12, name: "Availability Zone" },
  { id: 13, name: "Tenancy" },
  { id: 14, name: "Legal Entity" },
  { id: 15, name: "Billing Entity" },
];

function CostExplorer() {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [hide, setHide] = useState(false);
  const [filterBox, setFilterBox] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHide(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="pt-5 ml-3 space-y-1 z-10">
      <div className="font-extrabold text-3xl ml-2">Cost Explorer</div>
      <div className="ml-2">
        How to do always to be aware of cost change and history
      </div>

      <div className="w-[98%] min-h-screen bg-white rounded-sm  m-auto mt-3 ">
        <div className="h-16 border border-slate-300 flex items-center ease-in-out duration-500 justify-between relative">
          <div className="font-bold text-md flex  ml-3 items-center h-7 relative  ">
            Group By :
            <div className="font-bold ml-3 min-w-[100px] px-2 bg-blue-800 text-white  text-sm h-full flex items-center justify-center  rounded-md ">
              {selectedFilter.name}
            </div>
            <div className="border-l-2 border-slate-400 ml-3 h-7"></div>
            {filters
              .slice(0, 6)
              .filter((e) => e.id !== selectedFilter.id)
              .map((filter) => (
                <div
                  key={filter.id}
                  className="ml-3 min-w-20 px-2 bg-slate-200 hover:bg-blue-800 hover:text-white text-blue-800 text-[12px] h-full flex items-center justify-center rounded-md cursor-pointer ease-in-out duration-200 "
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter.name}
                </div>
              ))}
            <div className="relative mt-[3px]" ref={dropdownRef}>
              <div
                className="w-20 h-7 relative  text-blue-700 ml-5 flex justify-center "
                onClick={(e) => {
                  e.stopPropagation();
                  setHide(!hide);
                }}
              >
                More{" "}
                <FaChevronDown
                  className={`mt-[4px] scale-75 ml-1  font-bold ${
                    hide ? "" : "rotate-180  duration-300"
                  } `}
                />
              </div>
              <div
                className={`${
                  hide ? "" : "hidden"
                } absolute mt-1 ml-8 w-38 h-auto bg-white border border-slate-300 shadow-lg rounded-md p-3 z-10`}
              >
                {filters
                  .slice(6)
                  .filter((e) => e.id !== selectedFilter.id)
                  .map((filter) => (
                    <div
                      key={filter.id}
                      className="ml-3 min-w-20   text-[13px] h-full font-light mt-3  rounded-md cursor-pointer ease-in-out duration-200"
                      onClick={() => setSelectedFilter(filter)}
                    >
                      {filter.name}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="  top-4 right-70 h-7 bg-white z-40 border border-slate-300 w-[250px] ">
            <div className="relative h-7 border" onClick={(e)=>setDatePickerOpen(!datePickerOpen)}>
              <div className="">15 25 12003 351135468</div>
              <CiCalendarDate className="absolute right-5 top-1 scale-125" />
                </div>
                <div className={`${datePickerOpen ? "" : "hidden" } `}>
              <DateCalendarValue />
            </div>
          </div>

          <div className="mr-10 " onClick={() => setFilterBox(!filterBox)}>
            <PiSlidersHorizontalBold className="w-8 h-8 text-white bg-blue-900 p-1 font-bold rounded-md" />
          </div>
        </div>

        <div className="flex transition-all duration-300 ease-in-out">
          <div
            className={`${
              filterBox ? "w-[75%]" : "w-full"
            } h-full mt-5 transition-all duration-300 ease-in-out`}
          >
            <Charts />
          </div>
          <div
            className={`${
              filterBox ? "w-[25%] opacity-100" : "w-0 opacity-0"
            } min-h-screen border flex flex-col gap-1 transition-all duration-300 ease-in-out overflow-hidden`}
          >
            <div className="flex justify-between items-center mx-5 mt-3">
              <div>Filter</div>
              <div
                className="text-blue-800 font-semibold hover:cursor-pointer flex"
                onClick={() => window.location.reload}
              >
                Reset <RxReload className="rotate-90 ml-2 mt-1 " />
              </div>
            </div>
            {filters.map((filter) => (
              <div
                key={filter.id}
                className="border-b border-slate-300 h-10 w-[90%] mx-auto"
              >
                <input
                  disabled
                  type="checkbox"
                  id={filter.id}
                  name={filter.id}
                  value="Bike"
                  className=" mt-3"
                />
                <label
                  htmlFor={filter.id}
                  className="text-[14px] font-semibold ml-2"
                >
                  {" "}
                  {filter.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostExplorer;
