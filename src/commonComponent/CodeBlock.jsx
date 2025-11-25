import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

function CodeBlock({handleCopy,copyStatus,codeBlock}) {
  return (
    <>
      <div className="mt-4 relative w-[90%] border-2 border-primary rounded-md">
        <button
          onClick={() => handleCopy(codeBlock)}
          className="absolute right-8 top-2 text-sm px-3 py-1 border rounded-md ease-in-out duration-150 border-primary grid place-content-center h-6 w-8"
        >
          {copyStatus ? (
            <FaCheck className="text-primary" />
          ) : (
            <IoCopyOutline className=" text-primary hover:scale-125 ease-in-out duration-300" />
          )}
        </button>

        <pre className="bg-white text-primary font-bold p-4 rounded-lg overflow-x-auto text-sm h-50">
          <code>{codeBlock}</code>
        </pre>
      </div>
    </>
  );
}

export default CodeBlock;
