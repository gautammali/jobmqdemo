import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllJobsQuery } from "../../../../../features/job/jobApi";
import { updateCompanyId } from "../../../../../features/job/jobListSlice";
import RecentJobCard from "../../Job/RecentJobCard";

export default function RecentJobs() {
  const { userId } = useSelector((state) => state.auth.user);
  const { data, isLoading, isError, error } = useGetAllJobsQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToJobs = () => {
    dispatch(updateCompanyId(userId));
    setTimeout(() => {
      navigate("/jobs");
    }, 200);
  };
  let content = null;
  if (isLoading) {
    content = Array.from({ length: 5 }).map((_, id) => <LoadCard key={id} />);
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.data?.length === 0) {
    content = <p>No Found data</p>;
  }

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data
      ?.slice(0, 5)
      .map((item) => <RecentJobCard key={item.id} {...item} />);
    content = (
      <>
        {content}
        <div className="flex justify-between items-center pt-2 px-1">
          <p className="text-sm">
            Jobs {data?.data?.slice(0, 5).length} of {data?.data?.length}
          </p>
          <h6
            onClick={navigateToJobs}
            className={"font-semibold cursor-pointer text-sky-600 hover:underline text-sm"}
          >
            See more
          </h6>
        </div>
      </>
    );
  }
  return (
    <div className="flex flex-col gap-1 bg-white border border-site-border-400 px-2 py-3 pb-5 boxShadow2">
      <h2 className="font-medium font-roboto text-[30px] leading-[80px] text-site-bg-300">Recent Jobs</h2>
      {content}
    </div>
  );
}

const LoadCard = () => {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-400 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-400 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-400 rounded col-span-2"></div>
              <div className="h-2 bg-slate-400 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-400 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
