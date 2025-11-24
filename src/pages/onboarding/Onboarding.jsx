import React from "react";
import { Link } from "react-router-dom";

function Onboarding() {
  return (
    <div className="h-full">
      <div>
        <div className="text-2xl  font-bold ">Create an IAM role</div>
        <div className="">Create a IAM role by following these steps </div>
      </div>
      <div className="bg-white padding-4">
        {/* Log into AWS account & <Link to={"#"} className="underline text-LinkColor">Create an IAM role</Link> */}

        <ol>
          <li> Log into AWS account & <Link to={"#"} className="underline text-LinkColor">Create an IAM role</Link></li>
          <li> <div>In the Trusted entity type section, select Custom trust policy. Replace the prefilled policy with the policy provided below.</div>
          <div></div>
          </li>

        


        
        </ol>
      </div>
    </div>
  );
}

export default Onboarding;
