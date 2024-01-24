import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetFilePathQuery } from "../../../../features/file/fileApi";
import { useFinalJobApplyMutation } from "../../../../features/job/applyJobApi";

export default function ReviewAndSubmit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { applicationAttachments, questionsAnswers } = useSelector(
    (state) => state.applyJob
  );
  const { userId } = useSelector((state) => state.auth.user);
  const [finalJobApply, { data, isSuccess, isLoading }] =
    useFinalJobApplyMutation();

  const handleSubmit = () => {
    finalJobApply({
      jobId: Number(id),
      contactId: userId,
      questionsAnswers,
      applicationAttachments,
    });
  };
  if (!isLoading) {
    console.log(data);
  }
  useEffect(() => {
    if (data?.isSuccess && isSuccess) {
      setTimeout(() => {
        navigate("/jobs/apply/success");
      }, 100);
    }
  }, [data, isSuccess, navigate]);

  return (
    <div>
      <p className="text-[#4f4f4f] pb-6">Step 1 of 3</p>
      <h2 className="text-[#051532] text-2xl pb-2 font-medium">
        Review and submit
      </h2>
      <p className="text-[#4f4f4f] pb-4">
        This is your job application for the Operations Manager position at THE
        WORKSSYDNEY PTY. LTD.. Before you submit, review what’s included. You
        can edit the information.{" "}
      </p>

      <div className="border p-5 flex flex-col gap-2 mb-5">
        <h4 className="text-[22px] font-semibold text-black pb-2">
          Employer questions
        </h4>
        {questionsAnswers?.map((item, id) => (
          <div key={id} className={"flex flex-col"}>
            <h6 className="text-lg font-medium">{item.question}</h6>
            <p className="text-gray-600 text-base capitalize">
              Answer: {item?.affirmativeResponse === 1 ? "yes" : "no"}
            </p>
          </div>
        ))}
      </div>
      <div className="border p-5 flex flex-col gap-2 mb-5">
        <h4 className="text-[22px] font-semibold text-black pb-2">Profile</h4>
        <p className="text-[#4f4f4f] ">
          Your profile is included in your job application. If you want to make
          changes, go back to your profile
        </p>
      </div>

      <div className="border p-5 flex flex-col gap-2">
        <h4 className="text-[22px] font-semibold text-black pb-2">
          Supporting information
        </h4>
        {applicationAttachments?.map((item, id) => (
          <SingleDocument key={id} item={item} />
        ))}
      </div>

      <div className="pt-5">
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
}

const SingleDocument = ({ item }) => {
  const { data } = useGetFilePathQuery(item.filePath);
  return (
    <div className={"flex flex-col border px-5 py-2"}>
      <p className="text-lg capitalize">{item.title}</p>
      <p className=" font-semibold text-blue-800 hover:underline cursor-pointer">
        {data?.data?.fileName}
      </p>
    </div>
  );
};
