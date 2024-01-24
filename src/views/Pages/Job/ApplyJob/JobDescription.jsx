import React from "react";
import { TbCurrencyDollar } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import  {MdWorkOutline}  from "react-icons/md";
import  {AiOutlineCalendar}  from "react-icons/ai";

export default function JobDescription({ data }) {
  return (
    <div className="container space-y-4">
      <div className="border p-5 flex flex-col gap-3">
        <h3 className="text-[#051532] text-2xl pb-2">Job Info</h3>
        <div className="flex items-center gap-2 text-[#4f4f4f]">
          <IoLocationSharp className="text-2xl" />
          <p>Port Melbourne, VIC</p>
        </div>
        <div className="flex items-center gap-2 text-[#4f4f4f]">
          <TbCurrencyDollar className="text-2xl" />
          <p>{data.minSalary} - {data.maxSalary} {data?.currency}</p>
        </div>
        <div className="flex items-center gap-2 text-[#4f4f4f]">
          <MdWorkOutline className="text-2xl" />
          <p>Full time position, Permanent position</p>
        </div>
        <div className="flex items-center gap-2 text-[#4f4f4f]">
          <AiOutlineCalendar className="text-2xl" />
          <p>Closes 17 Mar 2023, 12:00 AM</p>
        </div>
      </div>
      <div className="border p-5 flex flex-col gap-3">
        <h3 className="text-[#051532] text-2xl pb-2">Job description</h3>
        <div className="flex items-center gap-2 text-[#4f4f4f]">
          
          <p>{data?.description}</p>
        </div>
        
      </div>
    </div>
  );
}
