import { Form, Formik } from "formik";
import React from "react";
import FormikControl from "../../../Components/Atoms/Forms/FormikControl";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { setQuestionsAnswers, updateNextStep } from "../../../../features/job/applyJobSlice";

export default function EmployerQuestions({ questions }) {
  const dispatch = useDispatch();
  questions = questions?.map((item) => {
    return { ...item, name: item?.question.split(" ").join("_") };
  });

  // create initial values object dynamically using the questions array
  const initialValues = questions?.reduce((acc, curr) => {
    return {
      ...acc,
      [curr?.name]: "",
    };
  }, {});

  // create validation schema dynamically using the questions array
  const validationSchema = yup.object(
    questions?.reduce((acc, curr) => {
      return {
        ...acc,
        [curr.name]: curr.mandatory
          ? yup.string().required(`${curr.question} is required`)
          : yup.string(),
      };
    }, {})
  );

  const onSubmit = (values) => {
    values = Object.keys(values).map((key, index) => ({
      lineNo: index,
      name: key,
      question: key.replace(/_/g, " "),
      affirmativeResponse: values[key] === "1" ? 1 : 0,
    }));
    dispatch(setQuestionsAnswers(values))
    dispatch(updateNextStep("EmployerQuestions"));
  };

  return (
    questions?.length && (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            {/* {isLoading && <Loading />} */}
            <p className="text-[#4f4f4f] pb-6">Step 1 of 3</p>
            <h2 className="text-[#051532] text-2xl pb-2 font-medium">
              Employer Questions
            </h2>
            <p className="text-[#4f4f4f] pb-4">
              These are questions from the employer. We’ll send your responses
              with your job application. The questions are optional, but we
              recommend you complete them. The employer will get a ‘No response’
              for any questions you don’t answer.
            </p>

            <div className="border p-5 flex flex-col gap-8">
              {questions?.map((item, id) => (
                <SingleQuestion key={id} item={item} />
              ))}
            </div>

            <div className="pt-5">
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
              >
                Next step
              </button>
            </div>
          </Form>
        )}
      </Formik>
    )
  );
}

const SingleQuestion = ({ item }) => {
  const options = [
    { key: "no", value: "0", id: `${item.name} + 1` },
    { key: "yes", value: "1", id: `${item.name} + 2` },
  ];
  return (
    <FormikControl
      key={item?.question}
      control="employerQuestion"
      label={item?.question}
      name={item?.name}
      options={options}
    />
  );
};
