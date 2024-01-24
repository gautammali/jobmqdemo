import React, { useState } from "react";
import { useUpdateAppliedJobMutation } from "../../../../../features/job/applyJobApi";
import Modal from "../../../../Components/Atoms/Modal/Modal";
import InterviewScheduledForm from "./InterviewScheduledForm";

export default function Action({ data: { applicationID } }) {
  const [open, setOpen] = useState(false);
  const [updateAppliedJob] = useUpdateAppliedJobMutation();
  const handleAction = (e) => {
    const statusId = Number(e.target.value);
    if (statusId === 0) return;
    if (statusId === 5) {
      setOpen(true);
      return;
    }
    updateAppliedJob({
      applicationId: applicationID,
      statusId,
    });
  };
  return (
    <div className="flex justify-end pr-1 items-center">
      <select
        name="action"
        id=""
        onChange={handleAction}
        className="focus:outline-0 border py-1 px-2 rounded"
      >
        <option value="0">Select Action</option>
        <option value="1">Submitted</option>
        <option value="2">Under Review</option>
        <option value="3">On Hold</option>
        <option value="4">Rejected</option>
        <option value="5">Interview Scheduled</option>
        <option value="6">Hired</option>
        <option value="7">More Information</option>
      </select>
      <Modal open={open} setOpen={setOpen}>
        <InterviewScheduledForm
          setOpen={setOpen}
          applicationId={applicationID}
        />
      </Modal>
    </div>
  );
}
