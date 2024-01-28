/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useJobListingMutation } from "../../../../features/job/jobListingApi";
import moment from "moment/moment";

import Filter from "./Filter";
import Loading from "../../../Components/Atoms/Alert/Loading";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import SearchJob from "./SearchJob";
// import { NavLink } from "react-router-dom";
import SortBy from "./SortBy";
import Dropdowns from "./Dropdowns";

export default function JobList() {
  const [jobListing, { data, isLoading, isError, error }] =
    useJobListingMutation();
  const jobListData = useSelector((state) => state.jobList);
  console.log(jobListData);
  const userAuthData = JSON.parse(localStorage.getItem('auth')) 
  const accessToken = userAuthData ? userAuthData.accessToken : '';
  useEffect(() => {
    jobListing({ ...jobListData });
  }, []);

  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.jobsListingResponses?.length === 0) {
    content = <p>No Found data</p>;
  }

  if (!isLoading && !isError && data?.jobsListingResponses?.length > 0) {
    content = data?.jobsListingResponses?.map((item) => (
      <Single key={item.id} {...item} accessToken={accessToken} />
    ));
  }

  return (
    <div className="bg-white">
      <div className="bg-[#f4f4f4] pt-16 pb-24">
        <div className="container">
          <h2 className="text-[#051532] text-[52px] mt-6 mb-5">Online job portal, Upload your CV or Post a JOB.</h2>
          <p className="text-[#4f4f4f] text-lg">
            JOBMQ a new era for Millions of people to extend their reach globally.
          </p>
        </div>
      </div>
      <div className="-mt-14">
        <SearchJob jobListing={jobListing} />
      </div>
      <div className="container grid grid-cols-3 gap-3 my-3">
        <Filter jobListing={jobListing} />
        <div className="col-span-3 sm:col-span-2">
          <SortBy jobListing={jobListing} />
          <div className="space-y-3 mt-1">{content}</div>
        </div>
      </div>
      <Pagination {...data} jobListing={jobListing} />
    </div>
  );
}

const Single = (props) => {
  const {
    id,
    description,
    maxSalary,
    minSalary,
    desingnation,
    expirationDate,
    currency,
    slugUrl,
    accessToken
  } = props || {};
  return (
    <div className="p-5 bg-white border-b">
      <div className="flex justify-between">
        <a
          // to={`/jobs/${id}/${slugUrl || desingnation?.split(" ").join('-')}`} 
          href={`https://jobmqdemoapp.vercel.app/jobs/${id}/${accessToken}`} 
          className="text-lg underline hover:no-underline text-[#0076bd]">{desingnation}</a>
        <div className="flex gap-3 items-center">
          
          <Dropdowns url={`${window.location.origin}/jobs/${id}/${slugUrl || desingnation?.split(" ").join('-')}`} />
        </div>
      </div>
      <div className="pt-2 space-y-2">
        <p className=" text-sm text-[#4f4f4f]">
          <span className="font-semibold">Expiring on:</span>{" "}
          {moment(expirationDate).format("DD MMM  YYYY")}{" "}
        </p>
        <p className="text-sm text-[#4f4f4f] pb-2">
          {currency ? currency : "$"} {minSalary} – {maxSalary}{" "}

        </p>
        <p className="text-sm pb-4 text-[#051532]">{description.slice(0, 350)}</p>
      </div>

    </div>
  );
};
