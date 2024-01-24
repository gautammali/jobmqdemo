import React from "react";
import { useSelector } from "react-redux";
import EmployerQuestions from "./EmployerQuestions";
import ReviewAndSubmit from "./ReviewAndSubmit";
import SupportingInformation from "./SupportingInformation";
import YourApplicationTimeline from "./YourApplicationTimeline";


export default function YourApplication({ data }) {
  const {step} = useSelector((state) => state.applyJob);

  return (
    <div className="container grid grid-cols-12 gap-10 my-5">
      <div className="col-span-4">
        <YourApplicationTimeline />
      </div>
      <div className="col-span-8">
        {step === 1 && (
          <EmployerQuestions questions={data?.selectionCriteriaDetails} />
        )}
        {step === 2 && <SupportingInformation />}
        {step === 3 && <ReviewAndSubmit />}
      </div>
    </div>
  );
}
