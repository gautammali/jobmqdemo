import React from 'react'
import { useGetActiveJobsQuery, useGetJobsApplicationStatusQuery } from '../../../../../features/reports/reportsApi';
import PieChart from './highchart';

export default function Reports() {

  return (
    <div className='container flex justify-between gap-5 h-fit mt-5'>

      <ActiveJobs />

      <JobsApplicationStatus />

    </div>
  )
}


const ActiveJobs = () => {
  const { data, isError, isLoading, error } = useGetActiveJobsQuery();

  let content = null;
  if (isLoading) {
    content = <p>Loading....</p>;
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.data?.length === 0) {
    content = <p>No Found data</p>;
  }

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = <PieChart info={data?.data} title={"Active Jobs"} id={"ActiveJobs"} />
  }
  return (
    <div className="h-full w-full text-center text-white flex flex-col justify-center items-center rounded">
      {content}
    </div>
  )
}
const JobsApplicationStatus = () => {
  const { data, isError, isLoading, error } = useGetJobsApplicationStatusQuery();

  let content = null;
  if (isLoading) {
    content = <p>Loading....</p>;
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.data?.length === 0) {
    content = <p>No Found data</p>;
  }

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = <PieChart info={data?.data} title={"Jobs Application Status"} id={"GetJobsApplicationStatus"} />
  }
  return (
    <div className="h-full w-full text-center text-white flex flex-col justify-center items-center rounded">
      {content}
    </div>
  )
}