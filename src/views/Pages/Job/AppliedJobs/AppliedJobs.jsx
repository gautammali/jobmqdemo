
import React from "react";
import { useGetAllApplicantsQuery } from "../../../../features/job/applyJobApi";
import ManageAppliedJobsTable from "./ManageAppliedJobsTable";

export default function AppliedJobs() {
    const { data, isLoading, isError, error } =
        useGetAllApplicantsQuery();
    

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
        content = <ManageAppliedJobsTable data={data?.data} />;
    }

    return <div className="container py-20">{content}</div>;
}


