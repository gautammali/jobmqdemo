import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useDeleteDocumentMutation,
  useGetDocumentQuery,
} from "../../../../features/document/documentApi";
import { useGetFilePathQuery } from "../../../../features/file/fileApi";
import { setApplicationAttachments, updateNextStep } from "../../../../features/job/applyJobSlice";
import Modal from "../../../Components/Atoms/Modal/Modal";
import AdditionalDocumentsForm from "../../../Components/Molecules/Profiles/Forms/AdditionalDocumentsForm";

export default function SupportingInformation() {
  const dispatch = useDispatch();
  const [additionalDocuments, setAdditionalDocuments] = useState([]);
  const [open, setOpen] = useState(false);
  const { userId } = useSelector((state) => state.auth.user);
  const { data, isError, isLoading, error } = useGetDocumentQuery({
    type: 1,
    refId: userId,
  });
  // const { data, isError, isLoading, error } = useGetDocumentQuery()
  const handleDocument = (e, item) => {
    if (e.target.checked) {
      setAdditionalDocuments([...additionalDocuments, {...item, file: item.filePath}]);
    } else {
      setAdditionalDocuments(
        additionalDocuments.filter((doc) => doc.id !== item.id)
      );
    }
  };

  let content = {};

  if (isLoading) {
    content = <div>Loading ....</div>;
  }
  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }
  if (!isLoading && !isError && data?.data?.length === 0) {
    content = <div>-</div>;
  }
  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((item, id) => (
      <CheckboxField
        item={item}
        key={id}
        onChange={(e) => handleDocument(e, item)}
      />
    ));
  }
const handleNextStep = () => {
  dispatch(setApplicationAttachments(additionalDocuments))
  dispatch(updateNextStep("SupportingInformation"))
}
  return (
    <div>
      <p className="text-[#4f4f4f] pb-6">Step 2 of 3</p>
      <h2 className="text-[#051532] text-2xl pb-2 font-medium">
        Supporting information
      </h2>
      <p className="px-10 my-5 py-6 bg-gray-300">
        Select any supporting information you’d like to include in this job
        application. Don’t upload or include personal identification documents
        or sensitive information. Find out more about privacy and conditions of
        use.
      </p>
      <div className="p-8 border w-full flex flex-col space-y-4">
        <div className="flex items-center justify-between ">
          <h4 className="text-[#051532] font-medium text-2xl">
            Additional documents
          </h4>
          <div className="">
            <button
              onClick={() => setOpen(true)}
              className="font-bold text-blue-600 underline"
            >
              Add new document
            </button>
          </div>
        </div>
        <p className="text-[#646464] font-normal">
          You can attach up to 3 additional documents in your job application,
          such as cover letters or examples of your work. Don't attach personal
          identification documents or sensitive information.
        </p>

        <div className="py-3">{content}</div>

        <Modal open={open} setOpen={setOpen}>
          <AdditionalDocumentsForm
            setOpen={setOpen}
            lineNo={data?.data?.length}
          />
        </Modal>


        
      </div>

      <div className="pt-5">
              <button
               onClick={handleNextStep}
                className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
              >
                Next step
              </button>
            </div>
    </div>
  );
}

const CheckboxField = ({ item, name, value, onChange }) => {
  const { data } = useGetFilePathQuery(item.filePath);
  const [open, setOpen] = useState(false);
  const [deleteDocument] = useDeleteDocumentMutation();
  const handleDelete = () => {
    alert("are you sure to delete this item");
    deleteDocument(item.id);
  };
  return (
    <label>
      <div className="flex gap-4 p-4 rounded-md border border-gray-200 mb-2">
        <Modal open={open} setOpen={setOpen}>
          <AdditionalDocumentsForm setOpen={setOpen} prevData={item} />
        </Modal>
        <input
          type="checkbox"
          name={name}
          checked={value}
          onChange={onChange}
          className="form-checkbox h-5 w-5 mt-1 text-gray-600"
        />

        <div className="flex-1 flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="text-lg capitalize">{item.title}</p>
            <p className=" font-semibold text-blue-800 hover:underline cursor-pointer">
              {data?.data?.fileName}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p
              onClick={() => setOpen(true)}
              className="text-lg font-semibold text-blue-800 hover:underline cursor-pointer"
            >
              Edit
            </p>
            <p
              onClick={handleDelete}
              className="text-lg font-semibold text-blue-800 hover:underline cursor-pointer"
            >
              Delete
            </p>
          </div>
        </div>
      </div>
    </label>
  );
};
