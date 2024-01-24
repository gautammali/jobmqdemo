import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineEdit } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import Loading from "../../../Atoms/Alert/Loading";
import Modal from "../../../Atoms/Modal/Modal";
import GetForm from "./GetForm";
import { useGetKewordsQuery } from "../../../../../features/keyword/keywordApi";
import { Collapse } from "react-collapse";

const JobPreferences = () => {
  const [open, setOpen] = useState(false);
  const { userId } = useSelector((state) => state.auth.user);
  const { data: resumeData, isLoading, isError } = useGetKewordsQuery(userId);
  const { data } = resumeData || {};
  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = "error";
  }
  if (!isLoading && !isError && data?.length > 0) {
    content = data.map((item, id) => (
      <Single
        key={item.keywordId}
        item={item}
        prevItem={data[id - 1]}
        lineNo={id}
      />
    ));
  }
  return (
    <div className="border p-5">
      <div
        className="flex justify-between items-center mb-3 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-2xl text-[#051532]">Profile Dimensions</h2>
        <BiChevronDown className="text-black font-black text-3xl" />
      </div>
      <Collapse isOpened={open}>{content}</Collapse>
    </div>
  );
};

export default JobPreferences;

const Single = ({ item, lineNo, prevItem }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-1 mb-3 border-b pb-3">
      <div className="flex justify-between items-center">
        <h6 className="text-[#051532] font-semibold">{item.kwName}</h6>
        <div
          onClick={() => setOpen(true)}
          className="cursor-pointer hover:text-sky-500 rounded-full hover:bg-gray-100 border p-2 transition_1"
        >
          <AiOutlineEdit className="text-xl" />
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <GetForm
          name={item.kwName}
          setOpen={setOpen}
          lineNo={lineNo}
          item={item}
          prevItem={prevItem}
        />
      </Modal>
      <p className="text-[#4f4f4f]">
        {item.kwValueName === null ? "No data found here" : item.kwValueName}
      </p>
    </div>
  );
};
