import { NavLink } from "react-router-dom";
import { useGetAllApplicantsQuery } from "../../../../../features/job/applyJobApi";


import AppliedJobCard from "../../Job/AppliedJobCard";

export default function AppliedJobs() {
  const { data, isLoading, isError, error } =
    useGetAllApplicantsQuery();


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
      .map((item, id) => <AppliedJobCard key={id} {...item} />);
    content = (
      <>
        {content}
        <div className="flex justify-between items-center pt-2 px-1">
          <p className="text-sm">
            Jobs {data?.data?.slice(0, 5).length} of {data?.data?.length}
          </p>
          <NavLink
            to="/jobs/applied"
            className={"font-semibold text-sky-600 hover:underline text-sm"}
          >
            See more
          </NavLink>
        </div>
      </>
    );
  }
  return (
    <div className="flex flex-col gap-1 border px-2 py-3 pb-5">
      <div className="flex justify-between items-center py-2">
        <h2 className="font-semibold text-lg">Applied Jobs</h2>
      </div>
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
