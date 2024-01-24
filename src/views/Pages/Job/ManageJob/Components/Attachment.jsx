import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useGetFilePathQuery } from "../../../../../features/file/fileApi";
import Modal from "../../../../Components/Atoms/Modal/Modal";

export default function Attachment({ data }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <FaCloudDownloadAlt />
      </div>
      <Modal open={showModal} setOpen={setShowModal}>
        <h3 className="text-3xl font-semibold ">Total {data.split(",")?.length} Attechment</h3>
        {data?.split(", ")?.map((item, id) => (
          <Single key={id} item={item} />
        ))}
      </Modal>
    </>
  );
}

const Single = ({ item }) => {
  const { data } = useGetFilePathQuery(item);

  return (
    <div className="border mt-2 p-3">
      <h6 className="text-xl font-medium text-sky-600 capitalize">
        <a href={`https://api.jobmq.com/file/${data?.data?.fileName}`} className="outline-none" download>
          {data?.data?.documentName}
        </a>
      </h6>
    </div>
  );
};
