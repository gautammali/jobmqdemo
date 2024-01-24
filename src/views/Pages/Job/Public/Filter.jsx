import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
// import { useDispatch, useSelector } from 'react-redux'
// import { useGetJobKewordsQuery } from '../../../../../features/keyword/keywordApi'
import GetForm from "./GetForm";
import { useGetPostJobkewordsQuery } from "../../../../features/keyword/keywordApi";
import Modal from "../../../Components/Atoms/Modal/Modal";
import Loading from "../../../Components/Atoms/Alert/Loading";
import { useDispatch, useSelector } from "react-redux";
import { clearFilter } from "../../../../features/job/jobListSlice";
export default function Filter({jobListing}) {
const dispatch = useDispatch()
  const jobListData = useSelector((state) => state.jobList);
  const { data, isLoading, isError } = useGetPostJobkewordsQuery();
  const keywords = data?.data?.filter((i) => i.type === 2);
 
  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = "error";
  }
  if (!isLoading && !isError && data?.data?.length > 0) {
    content = keywords?.map((item, id) => (
      <Single key={id} item={item} prevItem={data[id - 1]} lineNo={id} />
    ));
  }

  const handleFilter = () => {
    jobListing(jobListData)
  };

  return (
    <div className="col-span-3 sm:col-span-1 h-auto p-5">
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={handleFilter}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none "
        >
          Apply Filter
        </button>
        <span onClick={()=>dispatch(clearFilter())} className="text-sky-500 font-semibold cursor-pointer">Clear Filter</span>
      </div>
      {content}
    </div>
  );
}

const Single = ({ item, lineNo, prevItem }) => {
  const [open, setOpen] = useState(false);
  const { jobSearchKeyWords } = useSelector((state) => state.jobList);
  const exists = jobSearchKeyWords?.find((i) => i.keyworkId === item.keywordID);
  return (
    <div className="flex flex-col gap-1 mb-3 border-b pb-3">
      <div className="flex justify-between items-center">
        <h6 className="text-[#051532] font-semibold">{item?.name}</h6>
        <div
          onClick={() => setOpen(true)}
          className="cursor-pointer hover:text-sky-500 rounded-full hover:bg-gray-100 border p-2 transition_1"
        >
          <AiOutlineEdit className="text-xl" />
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <GetForm
          name={item.name}
          setOpen={setOpen}
          lineNo={lineNo}
          item={item}
          prevItem={prevItem}
        />
      </Modal>
      {exists?.value && (
        <p onClick={() => setOpen(true)} className="text-[#4f4f4f]">
          {exists?.value}
        </p>
      )}
      {exists?.keywordValue && (
        <p onClick={() => setOpen(true)} className="text-[#4f4f4f]">
          {exists?.keywordValue?.map((i) => (
            <span>{i}</span>
          ))}
        </p>
      )}
    </div>
  );
};
