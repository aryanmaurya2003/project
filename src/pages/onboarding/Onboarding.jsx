
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import iamRole from "../../assets/iamrole.png";
import CodeBlock from "../../commonComponent/CodeBlock";
import Block from "../../commonComponent/Block";
import { toast } from "react-toastify";



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
  {id: 6,
    description: "Paste the copied row ARN below",
     inputBox: true,
    inputArray:[{
    id: 15,
    inputBox: true,
    placeholder: "Enter aws id",
    name: "awsId",
  },
  {
    id: 7,
    inputBox: true,
    placeholder: "Enter account name",
    name: "accountName",
  },
  {
    id: 8,
    inputBox: true,
    placeholder: "Enter the IAM role ARN",
    name: "arnName",
  },]
  },
 
];


function Onboarding() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [copyStatus, setCopyStatus] = useState(false);
  const [copyStatus1, setCopyStatus1] = useState(false);
  const [formValue, setFormValue] = useState(() => {
  const savedData = localStorage.getItem("onboardingFormData");
  if (savedData) {
    try {
      return JSON.parse(savedData);
    } catch (error) {
      console.error("Error parsing saved data:", error);
    }
  }
  return {
    awsId: "",
    arnName: "",
    accountName: "",
  };
});



  
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formValue.awsId.trim()) {
      newErrors.awsId = "AWS ID is required";
    }
    
    if (!formValue.accountName.trim()) {
      newErrors.accountName = "Account Name is required";
    }
    
    if (!formValue.arnName.trim()) {
      newErrors.arnName = "IAM Role ARN is required";
    } 
    
    return newErrors;
  };

  const handleNext = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    // console.log("the erroris tis ", validationErrors)
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("please fill all the feild ")
      return;
    }
    console.log("the form value is this --------------", formValue)
    localStorage.setItem("onboardingFormData", JSON.stringify(formValue))
    
    toast.success("Data field saved")
    navigate("/dashboard/onboard/add2");
  };

  return (
    <div className="p-8">
      <div className="ml-9">
        <div className="text-2xl font-bold">Create an IAM role</div>
        <div>Create an IAM role by following these steps</div>
      </div>
      
      <form onSubmit={handleNext}>
        <ol className="w-[95%] mt-10 space-y-8 ml-10 bg-white p-10">
          {onboardingSteps.map((step, index) => (
            <li key={step.id} className="relative pl-15">
              <span className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-slate-400 text-white font-bold mt-0.5">
                {index + 1}
              </span>

              <div className="text-gray-700 inline">{step.description}</div>

              {step.inputBox && Array.isArray(step.inputArray) && (
                <div className="mt-[10px]  flex gap-x-20 gap-y-5 flex-wrap list-none">
                  {step.inputArray.map((input) => (
                    <div key={input.name} className="inline list-none">
                      <div className="text-[12px] text-slate-500 mb-1">
                        {input.label} 
                      </div>
                      <div className={`mt-1 w-[420px] border-2 rounded-md ${
                        errors[input.name] ? 'border-red-500' : 'border-primary'
                      }`}>
                        <input
                          type="text"
                          value={formValue[input.name]}
                          name={input.name}
                          onChange={handleChange}
                          className="w-full indent-3 h-13 text-md rounded-md"
                          placeholder={input.placeholder}
                        />
                      </div>
                      {errors[input.name] && (
                        <div className="text-red-700 text-[12px] mt-2">
                          {errors[input.name]}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {step.link && (
                <Link
                  to={step.link}
                  className="underline inline ml-2 text-blue-600"
                >
                  {step.linkText}
                </Link>
              )}

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

        <div className="flex justify-end px-10 mt-5">
          <div className="flex gap-10">
            <button
              type="submit"
              className="w-[330px] h-10 grid place-content-center bg-primary border border-primary text-white rounded-md hover:bg-white hover:text-primary ease-in-out duration-300"
            >
              Next-Add Customer Managed Policies
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Onboarding;
