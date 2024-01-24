import moment from "moment/moment";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { AiOutlineRight, AiOutlineStar } from "react-icons/ai";
import { useGetSingleJobQuery } from "../../../features/job/jobApi";
import { BsShareFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useGetDocumentQuery } from "../../../features/document/documentApi";
import Loading from "../../Components/Atoms/Alert/Loading";
import { Helmet } from 'react-helmet-async';

export default function JobDetails() {
  const { id } = useParams();
  const { data, isSuccess } = useGetSingleJobQuery(id);
  const {
    id: jobId,
    doc,
    description,
    minSalary,
    maxSalary,
    expirationDate,
    desingnation,
    selectionCriteriaDetails,
    keywordCriteria,
    companyName,
    isJobApplied,
  } = data?.data || {};
  return (
    isSuccess && (
      <>
        <Helmet>
          <title> 404 Page Not Found | Minimal UI </title>
        </Helmet>
        <div className="bg-gray-200 pt-8 pb-4">
          <div className="container flex justify-between flex-wrap sm:flex-nowrap">
            <div className="">
              <div className="flex items-center gap-1 text-sky-600 font-medium cursor-pointer">
                <NavLink to="/" className="hover:underline">
                  Home
                </NavLink>
                <AiOutlineRight />
                <NavLink to="/businesses/job" className="hover:underline">
                  Jobs
                </NavLink>
              </div>
              <h2 className="text-4xl font-medium pb-2">{desingnation}</h2>
              <p className="text-black font-extrabold">
                Job Id:{" "}
                <span className="font-semibold text-black">{jobId}</span>
              </p>
              <p className="text-black font-extrabold">
                Posted on:{" "}
                <span className="font-semibold text-black">
                  {moment(new Date(doc)).format("DD MMM YYYY")}
                </span>
              </p>
              <p className="text-black font-extrabold">
                Salary:{" "}
                <span className="font-semibold text-black">
                  {minSalary + " - " + maxSalary} {" AED"}
                </span>
              </p>
              <p className="text-black font-extrabold">
                Expiring on:{" "}
                <span className="font-semibold text-black">
                  {moment(new Date(expirationDate)).format("DD MMM YYYY")}
                </span>
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
                  >
                    {isJobApplied ? "Already applied" : "Apply"}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex items-center gap-2 w-full justify-center rounded-full border border-sky-600 hover:underline bg-white px-6 py-2 text-base font-semibold text-sky-700 shadow-sm hover:bg-gray-100  sm:mt-0 sm:ml-3 sm:w-auto sm:text-lg transition_1"
                  >
                    {" "}
                    <AiOutlineStar />
                    Save Job
                  </button>
                </div>
                <div className="flex justify-center items-center text-sky-600 gap-2 hover:underline font-semibold cursor-pointer">
                  <BsShareFill />
                  <p>Share this job</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex justify-between flex-1">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold">{companyName}</h4>
                </div>
                <div className="">
                  <img src={""} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid sm:grid-cols-12 grid-cols-1 gap-5 my-5">
            <div className="col-span-8 flex flex-col gap-5">
              <div className="p-5 border">
                <h3 className="text-2xl font-semibold pb-5">Job description</h3>
                <p className="pb-7">About this role</p>

                <p>{description}</p>
              </div>

              <div className="border p-5">
                <h3 className="text-2xl font-semibold pb-5">
                  Application Questions
                </h3>
                <div className="flex flex-col gap-3">
                  {selectionCriteriaDetails?.map((item, id) => (
                    <div key={id} className="p-5 border w-full">
                      <p>{item?.question}</p>
                    </div>
                  ))}
                </div>
              </div>

              <JobAttechment />
            </div>
            <div className="col-span-4 bg-gray-200 p-5">
              <h3 className="text-2xl font-semibold pb-5">Job Info</h3>
              <div className="flex flex-col gap-3">
                {keywordCriteria?.map((item, id) => (
                  <p key={id} className="font-bold text-base">
                    {item?.kwName}:{" "}
                    <span className="font-normal">{item?.kwValueName}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
}

const JobAttechment = () => {
  const { id } = useSelector((state) => state.job.data);

  const { data, isError, isLoading, error } = useGetDocumentQuery({
    type: 2,
    refId: id,
  });
  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.data?.length === 0) {
    content = <p>No Found data</p>;
  }

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((item, id) => (
      <div
        key={id}
        className="p-5 border w-full flex justify-between items-center"
      >
        <p>{item?.title}</p>
        
        <a href={`https://api.jobmq.com/file/${item?.filePath}`} target="_blank" rel="noopener noreferrer" className="font-bold text-sky-600 hover:underline cursor-pointer">
          View</a>
      </div>
    ));
  }
  return (
    <div className="border p-5">
      <h3 className="text-2xl font-semibold pb-5">Job Attechment</h3>
      <p className="text-gray-400 pb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos neque
        architecto tempora sunt nulla soluta iusto. Asperiores, laborum veniam
        temporibus, aspernatur unde in delectus at id cum, veritatis voluptatem
        sunt.
      </p>

      {content}
    </div>
  );
};
