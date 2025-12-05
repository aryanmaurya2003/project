import React, { useEffect, useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { PiSlidersHorizontalBold } from "react-icons/pi";
import { RxReload } from "react-icons/rx";
import DateCalendarValue from "../../commonComponent/DatePicker";
import { CiCalendarDate } from "react-icons/ci";
import { FaChartBar } from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5"; //line
import { LuChartColumnStacked } from "react-icons/lu";
import AwsCostStackedColumnChart from "./stackChart";
import CostTable from "./CostTable";

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
const arr = ["mscolumn2d", "msline", "stackedcolumn2d"];

function CostExplorer() {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [selectedSideFilter, setSelectedSideFilter] = useState({
    selected: false,
    id: null,
  });

  const [hide, setHide] = useState(false);
  const [filterBox, setFilterBox] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState({
    startDate: null,
    endDate: null,
  });
  const [selectedChart, setSelectedChart] = useState(arr[0]);
  const dropdownRef = useRef(null);
  const datedownRef = useRef(null);

  console.log("the selected chart is this", selectedChart);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHide(false);
      }
    };
    const handleDateClickOutside = (event) => {
      if (datedownRef.current && !datedownRef.current.contains(event.target)) {
        setDatePickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDateClickOutside);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleDateClickOutside);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="pt-5 ml-3 space-y-1 z-10">
      <div className="font-extrabold text-3xl ml-2">Cost Explorer</div>
      <div className="ml-2">
        How to do always to be aware of cost change and history
      </div>

      <div className="w-[98%] min-h-[calc(100vh-600px)] bg-white rounded-sm  m-auto mt-3 ">
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
                  className="ml-3 min-w-20 px-2 bg-slate-200 hover:bg-blue-800 hover:text-white text-blue-800 text-[12px] h-full flex items-center justify-center rounded-md cursor-pointer ease-in-out duration-200  "
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
                  className={`mt-1 scale-75 ml-1  font-bold ${
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

          <div
            className="  top-4 right-70 h-7 bg-white z-40 border border-slate-300 w-[220px] rounded-md"
            ref={datedownRef}
          >
            <div
              className="relative h-7  flex justify-between"
              onClick={() => setDatePickerOpen(!datePickerOpen)}
            >
              <div className="flex  items-center h-full ">
                <span className="inline-block ml-3 text-[13px]">
                  {selectedDate.startDate}
                </span>
                <span className="inline-block ml-2 text-[13px]">
                  {selectedDate.endDate}
                </span>
              </div>
              <div className="h-[94%] w-10 bg-slate-200 flex justify-center rounded-r-md">
                {" "}
                <CiCalendarDate className="  scale-125 w-8 mt-1  " />
              </div>
            </div>
            <div className={`${datePickerOpen ? "" : "hidden"} `}>
              <DateCalendarValue setSelectedDate={setSelectedDate} />
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
            } h-full mt-2 transition-all duration-300 ease-in-out`}
          >
            <div className="flex h-15  border-slate-300 gap-3 items-center justify-end ">
              <div className="w-[130px] h-8 flex  border border-slate-300  items-center mr-6 rounded-sm">
                <div
                  className={` w-[33%] h-full hover:bg-blue-200 hover:text-blue-800 border-r border-slate-300 flex justify-center items-center  ${
                    arr[0] === selectedChart ? "bg-blue-200 text-blue-800 " : ""
                  }`}
                  onClick={() => {
                    setSelectedChart(arr[0]);
                  }}
                >
                  {" "}
                  <FaChartBar className="w-5 h-5" />
                </div>
                <div
                  className={` w-[33%] h-full border-r border-slate-300 flex justify-center items-center hover:bg-blue-200 hover:text-blue-800  ${
                    arr[1] === selectedChart ? "bg-blue-200 text-blue-800 " : ""
                  }`}
                  onClick={() => {
                    setSelectedChart(arr[1]);
                  }}
                >
                  <IoAnalyticsOutline className=" w-5 h-5" />
                </div>
                <div
                  className={`w-[34%] h-full flex justify-center items-center hover:bg-blue-200 hover:text-blue-800  ${
                    arr[2] === selectedChart ? "bg-blue-200 text-blue-800 " : ""
                  }`}
                  onClick={() => {
                    setSelectedChart(arr[2]);
                  }}
                >
                  {" "}
                  <LuChartColumnStacked className="  w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="ease-in duration-75 p-5 border border-slate-400 mx-4 ">
              <AwsCostStackedColumnChart
                selectedChart={selectedChart}
                filterBox={filterBox}
              />
            </div>

            <div className="mt-4 mx-4 h-15 grid place-content-center bg-[#dbe6f8] border border-[#869bc3] text-[#1945b7] ">
              we are showing up top 1000 records by cost
            </div>

            <div className="m-4  min-h-[400px]">
              <CostTable />
            </div>
          </div>
          <div
            className={`${
              filterBox ? "w-[25%] opacity-100" : "w-0 opacity-0"
            } min-h-[calc(100vh-240px)] border-x border-slate-300 flex flex-col gap-1 transition-all duration-300 ease-in-out overflow-hidden`}
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
                className={` border-slate-300 min-h-10 hover:cursor-pointer   mx-auto ${
                  filter.id === selectedSideFilter.id &&
                  selectedSideFilter.selected
                    ? " w-full border -mt-1 rounded-md shadow-lg"
                    : "w-[90%] border-b"
                } `}
              >
                <div
                  className={`w-full mt-2 flex items-center  ${
                    filter.id === selectedSideFilter.id &&
                    selectedSideFilter.selected
                      ? "ml-4"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedSideFilter({
                      selected: !selectedSideFilter.selected,
                      id: filter.id,
                    })
                  }
                >
                  <input
                    disabled
                    type="checkbox"
                    id={filter.id}
                    name={filter.id}
                    value="Bike"
                    className=" mt-"
                  />
                  <label
                    htmlFor={filter.id}
                    className="text-[14px] font-semibold  ml-2"
                  >
                    {" "}
                    {filter.name}
                  </label>
                </div>

                <div
                  className={`${
                    filter.id === selectedSideFilter.id &&
                    selectedSideFilter.selected
                      ? ""
                      : "hidden"
                  }`}
                >
                  <div className="ml-[18px] rounded-md">
                    <input
                      type="text"
                      placeholder="Search"
                      className="border border-slate-300 w-[96%] h-7 placeholder:text-sm placeholder:font-bold placeholder:indent-2 rounded-sm focus:outline-none indent-2 text-sm mt-2 font-bold "
                    />
                    <div className="text-[13px] mt-2 ml-1">
                      Showing 15 result
                    </div>
                    <div className=" h-60 overflow-auto ">
                      {filters.map((items) => (
                        <div
                          className={`w-full mt-2 flex items-center `}
                          key={items.id}
                        >
                          <input
                            disabled
                            type="checkbox"
                            id={items.id}
                            name={items.id}
                            value="Bike"
                            className=" border-2 w-3 h-3"
                          />
                          <label
                            htmlFor={items.id}
                            className="text-[12px]   ml-2"
                          >
                            {" "}
                            {items.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-b border-slate-300"></div>
                  <div className="h-10 flex justify-end items-center gap-5  ">
                    {" "}
                    <button className=" h-6 w-[70px] border text-sm border-primary rounded-sm">
                      Close{" "}
                    </button>
                    <button className="h-6 w-[70px]  text-sm  bg-slate-300 text-white border border-slate-300 mr-4 rounded-sm">
                      Apply{" "}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostExplorer;
