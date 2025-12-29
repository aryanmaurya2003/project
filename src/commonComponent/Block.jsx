import React from 'react'
import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

function Block({handleCopy1, codeBlock1,copyStatus1,message}) {
  return (
      <div>
                      <div
                        className="mt-4 relative w-[98%] border-1 border-primary rounded-md"
                        onClick={() => handleCopy1(codeBlock1)}
                      >
                        <button className="absolute left-4 top-2 text-sm px-3 py-1 border rounded-md ease-in-out duration-150 border-primary grid place-content-center h-6 w-8">
                          {copyStatus1 ? (
                            <FaCheck className="text-primary" />
                          ) : (
                            <IoCopyOutline className=" text-primary hover:scale-125 ease-in-out duration-300" />
                          )}
                        </button>
    
                        <pre className="bg-white flex items-center text-md indent-13 text-primary font-bold p-4 rounded-lg overflow-x  h-10">
                          <code>{codeBlock1}</code>
                        </pre>
                      </div>
                      <div className="text-[11px] mt-1 text-slate-500">
                        {message}
                      </div>
                    </div>
  )
}

export default Block