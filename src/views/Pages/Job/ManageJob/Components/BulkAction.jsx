import React from "react";
import { useBulkUpdateAppliedJobMutation } from "../../../../../features/job/applyJobApi";

export default function BulkAction({ data }) {
  const values = data.map((item) => item.original.applicationID);
  const [value, setValue] = React.useState(0);
  const [bulkUpdateAppliedJob] = useBulkUpdateAppliedJobMutation();
  const handleBulkAction = (e) => {
    e.preventDefault();
    bulkUpdateAppliedJob({
      statusId: Number(value),
      jobApplications: values,
    });
  };

  return (
    <form onSubmit={handleBulkAction} className="flex items-center">
      <h4 className="text-xl font-semibold">Action:</h4>
      <select
        name="bulk-action"
        id="bulk-action"
        onChange={(e) => setValue(e.target.value)}
        className="border mx-2 px-4 py-2 rounded"
      >
        <option value="">Bulk Action</option>
        <option value="1">Submitted</option>
        <option value="2">Under Review</option>
        <option value="3">On Hold</option>
        <option value="4">Rejected</option>
        <option value="5">Interview Scheduled</option>
        <option value="6">Hired</option>
        <option value="7">More Information</option>
        <option value="8">Delete</option>
      </select>
      <button
      onClick={handleBulkAction}
        type="submit"
        className="inline-flex w-full justify-center rounded border border-transparent px-4 py-1 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
      >
        Go
      </button>
    </form>
  );
}
