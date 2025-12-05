import React, { useState } from "react";
import AwsTable from "./awsTable";
import { ec2data,rdsData,asgData } from "../../commonComponent/data";


function AwsService() {
  const arr = [ec2data, rdsData, asgData];

  const [data, setData] = useState(arr[0]);
  const handledataChange = (index) => {
    // Logic to handle data change based on index
  };

  return (
    <div className=" mt-10 ml-7 ">
      <div className="font-bold text-2xl ">Schedular</div>
      <div className="h-15 w-full flex gap-[2px]  mt-4   ">
        <div
          className="h-10 w-28 border border-slate-400 rounded-sm p-2 flex items-center bg-white justify-center hover:bg-primary hover:text-white "
          onClick={() => setData(arr[0])}
        >
          EC2
        </div>
        <div
          className="h-10 w-28 border border-slate-400 rounded-sm  p-2 flex items-center bg-white justify-center hover:bg-primary hover:text-white "
          onClick={() => setData(arr[1])}
        >
          RDS
        </div>
        <div
          className="h-10 w-28 border border-slate-400  rounded-sm p-2 flex items-center  bg-white justify-center hover:bg-primary hover:text-white "
          onClick={() => setData(arr[2])}
        >
          ASG
        </div>
      </div>

      <div>
        <AwsTable data={data} />
      </div>
    </div>
  );
}

export default AwsService;
