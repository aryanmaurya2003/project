import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import iamRole from "../../assets/iamrole.png";
import CodeBlock from "../../commonComponent/CodeBlock";
import Block from "../../commonComponent/Block";
import { createAccount } from "../../API/account.api";

import { onboardingSteps3 } from "./OnboardingData";

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
      toast.error(response.response.data.message || response.error.message);
    }
  };

  const handleCancel = () => {
    localStorage.removeItem("onboardingFormData");
    navigate("/dashboard/onboard/add");
  }

  return (
    <div className="p-8">
      <div className="ml-9">
        <div className="text-2xl font-bold">Create S3 Bucket</div>
        <div>Complete the final step to finish onboarding</div>
      </div>

      <form onSubmit={handleSubmit}>
        <ol className="w-[95%] mt-10 space-y-8 ml-10 bg-white p-10">
          {onboardingSteps3.map((step, index) => (
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
                    className="max-h-[750px] w-full"
                  />
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="flex justify-between px-10 mt-5">
          <button
            type="button"
            onClick={handleCancel}
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
