import moment from 'moment';
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import JobCardDropDown from './JobCardDropDown';
export default function AppliedJobCard({ appliedDate,status, jobTitle, jobId, expirationDate, minSalary, maxSalary }) {
    return (
      <div className="bg-white border hover:shadow-lg rounded flex flex-col gap-2 p-3 text-sm transition_1">
        <div className="flex items-center justify-between">
          <div className="">
            <p className="font-bold">
              {moment(new Date(appliedDate)).fromNow()}
            </p>
            <Link to={`/jobs/${jobId}`}>
              <h3 className="text-lg text-sky-600 hover:underline font-bold capitalize">
                {jobTitle}
              </h3>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="rounded-full p-3 hover:bg-gray-200 transition_1">
              <AiOutlineStar />
            </div>
            <JobCardDropDown jobId={jobId} />
          </div>
        </div>

        <div className="">
          <p className="text-black font-extrabold">
            Job Id: <span className="font-semibold text-black">{jobId}</span>
          </p>
          <p className="text-black font-extrabold">
            Posted on:{" "}
            <span className="font-semibold text-black">
              {moment(new Date(appliedDate)).format("DD MMM YYYY")}
            </span>
          </p>
          <p className="text-black font-extrabold">
            Status: <span className="font-semibold text-black">{status}</span>
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
        </div>
      </div>
    );
};



