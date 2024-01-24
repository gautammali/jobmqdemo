import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleJobQuery } from "../../../../features/job/jobApi";
import ApplyJobTab from "./ApplyJobTab";

export default function ApplyJob() {
  const { id } = useParams();
  const { data } = useGetSingleJobQuery(id);
  return (
    <div className="bg-[#f4f4f4]">
      <div className="container pb-16 pt-14">
        <h2 className="text-[#051532] text-[52px] pb-2 font-medium">
          {data?.data?.desingnation}
        </h2>
        <p>{data?.data?.companyName}</p>
      </div>

      <div className="">
        <ApplyJobTab data={data?.data} />
      </div>
    </div>
  );
}
