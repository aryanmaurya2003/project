import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";


function AwsTable({data}) {
  const [copyStatus, setCopyStatus] = useState({});

  const monthKeys = Object.keys(data[0]);

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopyStatus((prev) => ({ ...prev, [index]: true }));

    setTimeout(() => {
      setCopyStatus((prev) => ({ ...prev, [index]: false }));
    }, 1500);
  };

  return (
    <div className="w-full max-h-[450px] bg-white  rounded-md overflow-y-scroll">
      <div className="max-h-[400px] ">
        <table className="min-w-full border-collapse table-fixed text-sm">
          <thead className="sticky top-0   bg-[#3a72e4] text-white">
            <tr>
              {monthKeys.map((month) => (
                <th
                  key={month}
                  className="px-3 py-2 border border-slate-300 text-left text-sm font-semibold"
                >
                  {month}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                {monthKeys.map((month) =>
                  month !== "ResourceId" ? (
                    <td
                      key={month}
                      className={`px-3 py-2 border border-slate-300 text-left text-slate-900 text-sm `}
                    >
                      {row[month].toLocaleString()}
                    </td>
                  ) : (
                    <td
                      key={month}
                      className={`px-3  py-2 border border-slate-300 text-left text-slate-900 text-sm flex justify-between items-center`}
                    >
                      <div> {row[month].toLocaleString()} </div>
                      <button
                        onClick={() =>
                          handleCopy(row[month].toLocaleString(), i)
                        }
                        className="left-4 top-2 text-sm px-3 py-1 border rounded-md ease-in-out duration-150 border-primary grid place-content-center h-6 w-8"
                      >
                        {copyStatus[i] ? (
                          <FaCheck className="text-primary" />
                        ) : (
                          <IoCopyOutline className="text-primary hover:scale-125 ease-in-out duration-300" />
                        )}
                      </button>
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AwsTable;
