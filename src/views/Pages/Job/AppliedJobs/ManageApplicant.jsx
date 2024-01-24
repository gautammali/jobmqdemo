/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  useGetAllApplicantsQuery,
} from "../../../../features/job/applyJobApi";
// import Loading from "../../../Components/Atoms/Alert/Loading";
import ReactTableMangeJobAppliciants from "./ReactTableMangeJobAppliciants";

export default function ManageApplicant() {
  const { data, isLoading, isError, error } = useGetAllApplicantsQuery();
  // const { action } = useSelector((state) => state.applyJob);


  let content = null;
  if (isLoading) {
    // content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }
  if (!isLoading && !isError && data?.data?.length === 0) {
    content = <p>No Found data</p>;
  }

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = <ReactTableMangeJobAppliciants data={data?.data} />;
  }

  return <div className="container py-20">{content}</div>;
}
