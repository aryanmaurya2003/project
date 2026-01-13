import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import iamRole from "../../assets/iamrole.png";
import CodeBlock from "../../commonComponent/CodeBlock";
import Block from "../../commonComponent/Block";
import { createAccount } from "../../API/account.api";

const onboardingSteps = [
  {
    id: 1,
    description: [
      { type: "text", value: "Go to " },
      { type: "link", value: "S3 Console ", link: "#" },
      { type: "text", value: "and click Create bucket" },
    ],
    image: iamRole,
    alt: "S3 Console Screenshot",
  },
  {
    id: 2,
    description: "Enter the bucket name as shown below:",
    codeBlock1: `ck-tuner-bucket-${Date.now()}`,
    message: "Click anywhere in the box to copy the bucket name",
  },
  {
    id: 3,
    description: "Configure bucket settings with the following JSON policy:",
    codeBlock: `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudKeeperAccess",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::951485052809:root"
      },
      "Action": [
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}`,
  },
  {
    id: 4,
    description: "Enable versioning and server-side encryption for the bucket.",
    image: iamRole,
    alt: "Bucket settings screenshot",
  },
  {
    id: 5,
    description: [
      { type: "text", value: "Click " },
      { type: "text", value: "Create bucket " },
      { type: "text", value: "to complete the setup" },
    ],
  },
  {
    id: 6,
    description: "Copy the bucket ARN from the bucket properties:",
    image: iamRole,
    alt: "Bucket ARN location",
  },
  {
    id: 7,
    description: "Verify bucket access by uploading a test file.",
    image: iamRole,
    alt: "Upload test file",
  },
];

function Onboardingpage3() {
  const navigate = useNavigate();
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

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formValue = localStorage.getItem("onboardingFormData");
    const parsedFormValue = JSON.parse(formValue);
    console.log("the parse form is this  -----------  Form Data:", parsedFormValue);

    if (parsedFormValue) {
      if (
        !parsedFormValue.awsId?.trim() ||
        !parsedFormValue.accountName?.trim() ||
        !parsedFormValue.arnName?.trim()
      ) {
        localStorage.removeItem("onboardingFormData");
        toast.error("please fill required field");
        navigate("/dashboard/onboard/add");
        return;
      }
    } else {
      toast.error("please fill required field");
      navigate("/dashboard/onboard/add");
      return;
    }

    console.log("the parse form is this    Form Data:", parsedFormValue);

    const response = await createAccount(parsedFormValue);

    if (response.status == 200) {
      localStorage.removeItem("onboardingFormData");
      toast.success("Onboarding completed successfully!");
      navigate("/dashboard/onboard");
    }
    else{
      console.log("the error is this----------------------------------",response)
      toast.error("something went wrong")
    }
  };

  return (
    <div className="p-8">
      <div className="ml-9">
        <div className="text-2xl font-bold">Create S3 Bucket</div>
        <div>Complete the final step to finish onboarding</div>
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
                <div className="mt-4 w-[98%] border-2 border-primary rounded-md">
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="max-h-[250px] w-full"
                  />
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="flex justify-between px-10 mt-5">
          <button
            type="button"
            className="w-[130px] h-10 grid place-content-center bg-white border border-primary text-primary rounded-md hover:bg-primary hover:text-white duration-300"
          >
            Cancel
          </button>

          <div className="flex gap-10">
            <button
              type="button"
              onClick={handleBack}
              className="w-[330px] h-10 grid place-content-center bg-white border border-primary text-primary rounded-md hover:bg-primary hover:text-white duration-300"
            >
              Back - Add Customer Managed Policies
            </button>

            <button
              type="submit"
              className="w-[330px] h-10 grid place-content-center bg-primary border border-primary text-white rounded-md hover:bg-white hover:text-primary duration-300"
            >
              Complete Onboarding
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Onboardingpage3;
