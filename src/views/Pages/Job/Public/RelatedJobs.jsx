/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useJobListingMutation } from "../../../../features/job/jobListingApi";
import Loading from "../../../Components/Atoms/Alert/Loading";
import moment from 'moment';
// import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';
// import JobCardDropDown from './JobCardDropDown';


export default function RelatedJobs({ contactId ,jobId}) {
  const [jobListing, { data, isLoading, isError, error }] =
    useJobListingMutation();
  const jobListData = useSelector((state) => state.jobList);

  useEffect(() => {
    jobListing({ ...jobListData, companyId: contactId });
  }, []);

  console.log("data",data);
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
    const relatedjobs = data?.jobsListingResponses?.filter( (item) => item?.id !== jobId);
    content = relatedjobs?.slice(0,4)?.map((item) => (
      <RelatedJobCard key={item.id} {...item} />
    ));
  }
  return <div className="grid grid-cols-4 my-3 gap-4 items-center">{content}</div>;
}



function RelatedJobCard({ desingnation, doc,id, expirationDate, minSalary, maxSalary }) {
  return (
    <div className="bg-white border hover:shadow-lg rounded flex flex-col gap-2 p-3 text-sm transition_1">
      <div className="flex items-center justify-between">
        <div className="">
          <p className="font-bold">
            {moment(doc).format("DD MMM YYYY")}
          </p>
          <Link to={`/jobs/${id}/${desingnation?.split(" ").join('-')}`}>
            <h3 className="text-lg text-sky-600 hover:underline font-bold capitalize">
              {desingnation}
            </h3>
          </Link>
        </div>
      </div>

      <div className="">
        <p className="text-black font-extrabold">
          Salary:{" "}
          <span className="font-semibold text-black">
            {minSalary + " - " + maxSalary} {" AED"}
          </span>
        </p>
        <p className="text-black font-extrabold">
          Expired on:{" "}
          <span className="font-semibold text-black">
            {moment(expirationDate).format("DD MMM YYYY")}
          </span>
        </p>
      </div>
    </div>
  );
};



