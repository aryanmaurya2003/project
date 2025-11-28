import React, { useState } from "react";
import { Link } from "react-router-dom";
import iamRole from "../../assets/iamrole.png";
import CodeBlock from "../../commonComponent/CodeBlock";
import Block from "../../commonComponent/Block";

const onboardingSteps = [
  {
    id: 1,
    description: [
      { type: "text", value: "Go to " },
      { type: "link", value: "Create policy ", link: "#" },
      { type: "text", value: "page" },
    ],
  },
  {
    id: 2,
    description: [
      {
        type: "text",
        value:
          "Click on the JSON tab and paste the policy below, then click on Next:",
      },
    ],
    codeBlock: `{
  "Version": "2025-11-25",
  "Statement": [
    {
      "Sid": "costAudit",
      "effect": "Allow",
      "Action": [
      "dms:Describe*",
      "dms:List*",
      "kafka:Describe*",
      "kafka:Get*",
      "kafka:post*"
      ]
    }
  ]
}`,
  },
  {
    id: 3,
    description: [
      {
        type: "text",
        value:
          "In the name field, enter the policy name below and click Create Policy:",
      },
    ],
    codeBlock1: `cktuner-CostAuditPolicy`,
  },
  {
    id: 4,
    description: [
      { type: "text", value: "Again, go to the  " },
      { type: "link", value: "Create policy ", link: "#" },
      { type: "text", value: " page" },
    ],
  },
  {
    id: 5,
    description:
      "Click on the json Tab and paste the following policy and click on the next:",
    codeBlock: `{
  "Version": "2025-11-25",
  "Statement": [
    {
      "Sid": "costAudit",
      "effect": "Allow",
      "Action": [
      "dms:Describe*",
      "dms:List*",
      "kafka:Describe*",
      "kafka:Get*",
      "kafka:post*"
      ]
    }
  ]
}`,
  },
  {
    id: 6,
    description:
      "In the main field , enter below mentioned policy name and click on Create Policy",
    codeBlock1: `cktuner-SecAuditPolicy`,
  },
  {
    id: 7,
    description: [
      { type: "text", value: "Again, go to the  " },
      { type: "link", value: "Create policy ", link: "#" },
      { type: "text", value: " page" },
    ],
  },
  {
    id: 8,
    description:
      "Click on the json Tab and paste the following policy and click on the next:",
    codeBlock: `{
  "Version": "2025-11-25",
  "Statement": [
    {
      "Sid": "costAudit",
      "effect": "Allow",
      "Action": [
      "dms:Describe*",
      "dms:List*",
      "kafka:Describe*",
      "kafka:Get*",
      "kafka:post*"
      ]
    }
  ]
}`,
  },
  {
    id: 9,
    description: [
      {
        type: "text",
        value:
          "In the name field, enter the policy name below and click Create Policy:",
      },
    ],
    codeBlock1: `cktuner-TunerReadEssentials`,
  },
  {
    id: 10,
    description: [
      { type: "text", value: "Go to " },
      { type: "link", value: "CK-Tuner-Role ", link: "#" },
    ],
    image: iamRole,
    alt: "Error in loading image",
  },
  {
    id: 11,
    description:
      "In permissioin policies, Click on Add permision > Attack Policies",
    image: iamRole,
    alt: "Error in loading image",
  },
  {
    id: 12,
    description:
      "Filter by type > Customer managed then search for cktuner-costAuditPolicy,ckTuner-SecAuditPolicy,cktuner-TunerReadEssential and select them",
    image: iamRole,
    alt: "Error in loading image",
  },
  {
    id: 13,
    description: [
      { type: "text", value: "Now, " },
      { type: "text", value: "Click on Add Permission " },
    ],
  },
  {
    id: 14,
    description: [
      { type: "text", value: "In permission Policies, Click on " },
      { type: "text", value: " Add Permission > Create Inline Policy " },
    ],
    image: iamRole,
    alt: "Error in loading image",
  },
  {
    id: 15,
    description: "Click on the json Tab and paste the following policy ",
    codeBlock: `{
  "Version": "2025-11-25",
  "Statement": [
    {
      "Sid": "costAudit",
      "effect": "Allow",
      "Action": [
      "dms:Describe*",
      "dms:List*",
      "kafka:Describe*",
      "kafka:Get*",
      "kafka:post*"
      ]
    }
  ]
}`,
  },
  {
    id: 16,
    description: [
      { type: "text", value: "Now, " },
      { type: "text", value: "Click on Review Policy " },
    ],
  },
  {
    id: 17,
    description: [
      {
        type: "text",
        value:
          "In the Name field, enter the below mentioned policy name and click on ",
      },
      { type: "text", value: "Create policy " },
    ],
  },
];

function OnboardingPage2() {
  const [error, setErrors] = useState(false);
  const [arnRole, setarnRole] = useState("");
  const [copyStatus, setCopyStatus] = useState(false);
  const [copyStatus1, setCopyStatus1] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 1500);
  };

  const handleCopy1 = (code) => {
    navigator.clipboard.writeText(code);
    setCopyStatus1(true);
    setTimeout(() => setCopyStatus1(false), 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (arnRole.length === 0) {
      setErrors(true);
    } else {
      setErrors(false);
      alert(`Form submitted successfully: ${arnRole}`);
    }
  };

  return (
    <div className="p-8">
      <div className="ml-9">
        <div className="text-2xl font-bold">Add Customer Managed Policies</div>
        <div>Create an inline policy for the role below</div>
      </div>

      <form onSubmit={handleSubmit}>
        <ol className="w-[95%] mt-10 space-y-8 ml-10 bg-white p-10">
          {onboardingSteps.map((step, index) => (
            <li key={step.id} className="relative pl-15">
              <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-slate-400 text-white font-bold mt-0.5">
                {index + 1}
              </span>

              <div className="text-gray-700 inline">
                {Array.isArray(step.description)
                  ? step.description.map((item, i) =>
                      item.type === "text" ? (
                        <span key={i}>{item.value}</span>
                      ) : (
                        <Link
                          key={i}
                          to={item.link}
                          className="underline text-blue-600 mx-1"
                        >
                          {item.value}
                        </Link>
                      )
                    )
                  : step.description}
              </div>

              {/* Code blocks */}
              {step.codeBlock && (
                <CodeBlock
                  handleCopy={handleCopy}
                  copyStatus={copyStatus}
                  codeBlock={step.codeBlock}
                />
              )}

              {step.codeBlock1 && (
                <Block
                  handleCopy1={handleCopy1}
                  codeBlock1={step.codeBlock1}
                  copyStatus1={copyStatus1}
                  message={step.message}
                />
              )}

              {step.image && (
                <div className="mt-4 w-[90%] border-2 border-primary rounded-md">
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
                  <div className="mt-1 w-[380px] border-2 border-primary rounded-md">
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
                      This field is required
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
            className="w-[130px] h-10 grid place-content-center bg-white border border-primary text-primary rounded-md hover:bg-primary hover:text-white duration-300"
          >
            Cancel
          </button>

          <div className="flex gap-10">
            <button
              type="button"
              className="w-[330px] h-10 grid place-content-center bg-white border border-primary text-primary rounded-md hover:bg-primary hover:text-white duration-300"
            >
              Back- Create An Ian Role
            </button>

            <button
              type="submit"
              className="w-[330px] h-10 grid place-content-center bg-primary border border-primary text-white rounded-md hover:bg-white hover:text-primary duration-300"
            >
              Next - Create S3 bucket
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OnboardingPage2;
