import { Form, Formik } from "formik";
import * as yup from "yup";
import React, { useEffect } from "react";

import { useUpdateAppliedJobMutation } from "../../../../../features/job/applyJobApi";
import FormikControl from "../../../../Components/Atoms/Forms/FormikControl";
import Loading from "../../../../Components/Atoms/Alert/Loading";
import Leftword from "../../../../Components/Atoms/utils/Leftword";

export default function InterviewScheduledForm({ setOpen, applicationId }) {
  const [updateAppliedJob, { data, isLoading }] = useUpdateAppliedJobMutation();

  const initialValues = {
    interviewDateTime: "",
    comment: "",
  };

  const validationSchema = yup.object({
    comment: yup.string().required("Role is required"),
    interviewDateTime: yup.date().default(function () {
      return new Date();
    }),
  });

  const onSubmit = (values) => {
    console.log(values);
    updateAppliedJob({
      ...values,
      applicationId,
      statusId: 5,
    });
  };

  useEffect(() => {
    if (data?.isSuccess) {
      setOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.isSuccess]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <h3 className="text-[#051532] text-2xl mb-2 font-medium">
            Interview Scheduling
          </h3>

          {isLoading && <Loading />}
          <div className="sp space-y-4 py-5">
            <FormikControl
              control="dateTime"
              label="Set Interview DateTime"
              name="interviewDateTime"
            />

            <FormikControl control="textarea" label="Comment" name="comment" />
            <Leftword max={300} current={formik.values.comment} />
          </div>

          <div className="">
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
            >
              Send
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-full border border-sky-600 hover:underline bg-white px-6 py-2 text-base font-semibold text-sky-700 shadow-sm hover:bg-gray-100  sm:mt-0 sm:ml-3 sm:w-auto sm:text-lg transition_1"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
