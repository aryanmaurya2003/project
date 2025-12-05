import React, { useState } from "react";
import { Link } from "react-router-dom";
// import iamRole from "../../"
import iamRole from "../../assets/iamrole.png";
import CodeBlock from "../../commonComponent/CodeBlock";
import Block from "../../commonComponent/Block";

const onboardingSteps = [
  {
    id: 1,
    description: "Access the AWS console and create an IAM role.",
    linkText: "Create an IAM role",
    link: "#",
  },
  {
    id: 2,
    description:
      "In the Trusted entity type section, select Custom trust policy and replace with policy provided below.",
    codeBlock: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::951485052809:role/ck-tuner-nonprod-transitive-role"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "MU1HX0RFRkFVTFQwMzM5NTZlYS1kMDE3LTRjYmQtYjY3ZS1jMGI4NWJjY2U4Yzk="
        }
      }
    },
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "s3.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}`,
  },
  {
    id: 3,
    description:
      "Click on Next to go to the Add permissions page. We would not be adding any permissions for now because the permission policy content will be dependent on the AWS Account ID retrieved from the IAM Role. Click on Next",
  },
  {
    id: 4,
    description:
      "In the Role name field, enter the below-mentioned role name, and click on Create Role",
    codeBlock1: `CK-Tuner-Role-Dev2`,
    message: "Click anywhere in the box to copy the content inside",
  },
  {
    id: 5,
    description: "Go to the newely created IAM role and copy the Role ARN- ",
    image: iamRole,
    alt: "Error in loading image",
  },
  {
    id: 6,
    description: "Paste the copied row ARN below",
    inputBox: true,
    message: "Enter the IAM role ARN",
  },
];

function Onboarding() {
  const [error, setErrors] = useState(false);
  const [arnRole, setarnRole] = useState("");
  const [copyStatus, setCopyStatus] = useState(false);
  const [copyStatus1, setCopyStatus1] = useState(false);

  console.log("the value is this", arnRole);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopyStatus(true);

    setTimeout(() => {
      setCopyStatus(false);
    }, 1500);
  };
  const handleCopy1 = (code) => {
    navigator.clipboard.writeText(code);
    setCopyStatus1(true);

    setTimeout(() => {
      setCopyStatus1(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(arnRole.length);
    if (arnRole.length === 0) {
      setErrors(true);
    } else {
      setErrors(false);
      alert(`form submitted successfully ${arnRole}`);
    }
  };

  return (
    <div className=" p-8">
      <div className="ml-9">
        <div className="text-2xl font-bold">Create an IAM role</div>
        <div>Create an IAM role by following these steps</div>
      </div>
      <form onSubmit={handleSubmit}>
        <ol className="w-[95%] mt-10 space-y-8 ml-10 bg-white p-10">
          {onboardingSteps.map((step, index) => (
            <li key={step.id} className="relative pl-15">
              <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-slate-400 text-white font-bold mt-0.5">
                {index + 1}
              </span>

              <div className="text-gray-700 inline ">{step.description}</div>

              {step.link && (
                <Link
                  to={step.link}
                  className="underline inline ml-2 text-blue-600"
                >
                  {step.linkText}
                </Link>
              )}

              {/* {step.codeBlock && (
                <div className="mt-4 relative w-[90%] border-2 border-primary rounded-md">
                  <button
                    onClick={() => handleCopy(step.codeBlock)}
                    className="absolute right-8 top-2 text-sm px-3 py-1 border rounded-md ease-in-out duration-150 border-primary grid place-content-center h-6 w-8"
                  >
                    {copyStatus ? (
                      <FaCheck className="text-primary" />
                    ) : (
                      <IoCopyOutline className=" text-primary hover:scale-125 ease-in-out duration-300" />
                    )}
                  </button>

                  <pre className="bg-white text-primary font-bold p-4 rounded-lg overflow-x-auto text-sm h-50">
                    <code>{step.codeBlock}</code>
                  </pre>
                </div>
              )} */}

              {step.codeBlock && (<CodeBlock  handleCopy={handleCopy} copyStatus={copyStatus} codeBlock={step.codeBlock}  />)}
              {/* {step.codeBlock1 && (
                <div>
                  <div
                    className="mt-4 relative w-[90%] border-2 border-primary rounded-md"
                    onClick={() => handleCopy1(step.codeBlock1)}
                  >
                    <button className="absolute left-4 top-2 text-sm px-3 py-1 border rounded-md ease-in-out duration-150 border-primary grid place-content-center h-6 w-8">
                      {copyStatus1 ? (
                        <FaCheck className="text-primary" />
                      ) : (
                        <IoCopyOutline className=" text-primary hover:scale-125 ease-in-out duration-300" />
                      )}
                    </button>

                    <pre className="bg-white flex items-center text-md indent-13 text-primary font-bold p-4 rounded-lg overflow-x  h-10">
                      <code>{step.codeBlock1}</code>
                    </pre>
                  </div>
                  <div className="text-[11px] mt-1 text-slate-500">
                    {step.message}
                  </div>
                </div>
              )} */}
               {step.codeBlock1 && (<Block handleCopy1={handleCopy1} codeBlock1={step.codeBlock1} copyStatus1={copyStatus1} message={step.message}/>)}

              {step.image && (
                <div className="mt-4  w-[90%] border-2 border-primary rounded-md ">
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="max-h-[180px] w-full"
                  />
                </div>
              )}
              {step.inputBox && (
                <div>
                  <div className="text-[12px] mt-3 text-slate-500">
                    {step.message}
                  </div>
                  <div className="mt-1 w-[380px]   border-2 border-primary rounded-md ">
                    <input
                      type="text"
                      value={arnRole}
                      onChange={(e) => setarnRole(e.target.value)}
                      className="w-full indent-3 h-13 text-md"
                      placeholder={step.message}
                    />
                  </div>
                  {error && (
                    <div className="text-red-700 text-[12px] mt-2">
                      This feild is required
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="flex justify-between px-10 mt-5">
          <button
            type="submit"
            className="w-[130px] h-10 grid place-content-center bg-white border  border-primary text-primary rounded-md hover:bg-primary hover:text-white  ease-in-out duration-300"
          >
            Cancel
          </button>
          <div className="flex gap-10">
            <button
              type="submit"
              className="w-[130px] h-10 grid place-content-center bg-white border  border-primary text-primary rounded-md hover:bg-primary hover:text-white  ease-in-out duration-300"
            >
              Back
            </button>
            <Link to={"/dashboard/onboard/add2"}>
              <button
                type="submit"
                className="w-[330px] h-10 grid place-content-center bg-primary border  border-primary text-white rounded-md hover:bg-white hover:text-primary  ease-in-out duration-300"
              >
                Next-Add Customer Managed Policies
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Onboarding;
