import React from "react";
import Modal from "../../../../Components/Atoms/Modal/Modal";
import History from "../../AppliedJobs/Components/History";

export default function Message({ job }) {
  const [open, setOpen] = React.useState(false);
  console.log(job);
  return (
    <div className="flex flex-col items-center">
      <p>{job?.comment?.slice(0, 30)}</p>
      <button
        className="text-site-text-100 font-semibold font-roboto"
        onClick={() => setOpen(true)}
      >
        History
      </button>

      <Modal open={open} setOpen={setOpen}>
        <h3 className="text-xl font-semibold -mt-8">History</h3>
        <History id={job?.jobId} />
      </Modal>
    </div>
  );
}


