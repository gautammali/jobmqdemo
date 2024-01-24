import React from "react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { ImRadioChecked2 } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../../../features/job/applyJobSlice";
const data = [
  ["Employer questions",1],
  ["Supporting information",2],
  ["Review and submit",3]
];

export default function YourApplicationTimeline() {
  const dispatch = useDispatch();
  const { step } =
    useSelector((state) => state.applyJob);
  return (
    <ol className="relative border-l border-gray-200">
      {data.map((item, id) => (
        <li key={id} className="mb-10 ml-6 ">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ">
            {step - 1 === id ? (
              <ImRadioChecked2 className="text-sky-600" />
            ) : step-2  >= id  ? (<FaCheckCircle className="text-green-400" />):(
              <RiCheckboxBlankCircleLine />
            )}
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {step-2  >= id  ? <span onClick={()=>dispatch(setStep(item[1]))} className="cursor-pointer">{item[0]}</span> : item[0]}
          </h3>
        </li>
      ))}
    </ol>
  );
}
