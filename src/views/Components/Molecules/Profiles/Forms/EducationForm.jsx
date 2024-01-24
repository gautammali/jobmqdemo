import { Form, Formik } from 'formik';
import * as yup from 'yup';
import React from 'react'
import { useSelector } from 'react-redux';
import { useAddQualificationMutation, useUpdateQualificationMutation } from '../../../../../features/qualification/qualificationApi';
import Loading from '../../../Atoms/Alert/Loading';
import FormikControl from '../../../Atoms/Forms/FormikControl';
import { useGetKeywordValuesQuery } from '../../../../../features/keyword/keywordApi';
import Leftword from '../../../Atoms/utils/Leftword';


export default function EducationForm({ setOpen, lineNo, prevData }) {
  const { userId } = useSelector(state => state.auth.user)
  const [addQualification, { data, isLoading }] = useAddQualificationMutation();
  const [updateQualification, { data: updateData }] = useUpdateQualificationMutation()
  const { data: options } = useGetKeywordValuesQuery(1008)

  const prevDeg = options?.data?.find(i => i.value === prevData?.levelOfEducation)
  const initialValues = {
    levelOfEducation: prevDeg?.value ? [prevDeg] : [],
    institute: prevData?.institute || "",
    yearCompleted: prevData?.yearCompleted || "",
    description: prevData?.description || ""
  }
  const validationSchema = yup.object({
    levelOfEducation: yup.array().required("Required"),
    institute: yup.string().required("Required"),
    yearCompleted: yup.number().typeError('Year must be a number').positive('Must be greater than zero').max(2030).required('Required'),
    description: yup.string().max(300)
  })
  const onSubmit = values => {
    if (prevData?.levelOfEducation) {
      updateQualification({
        ...prevData,
        ...values,
        yearCompleted: Number(values?.yearCompleted),
        levelOfEducation: values?.levelOfEducation[0]?.valueID
      })
    } else {
      addQualification({
        ...values,
        yearCompleted: Number(values?.yearCompleted),
        levelOfEducation: values?.levelOfEducation[0]?.valueID,
        userId: userId,
        lineNo: lineNo + 1,
      });
    }
  }


  if (data?.isSuccess || updateData?.isSuccess) {
    setOpen(false)
  }

  return (

    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >

      {
        formik => (
          <Form>
            <h3 className='text-[#051532] text-2xl mb-2 font-medium'>{prevData?.levelOfEducation ? "Edit" : "Add"} Qualification</h3>
            <p>Personal introductions are a way to tell employers who you are. Highlight your top skills, experience, education and interests. This is one of the first things employers will see on your profile.</p>
            {isLoading && <Loading />}
            <div className="sp space-y-4 py-5">

              {/* <FormikControl control="input" label="Level of education" name="levelOfEducation" /> */}
              <FormikControl singleSelect control="multiselect" label="Level of education" name="levelOfEducation" options={options?.data} />
              <FormikControl control="input" label="School or institute" name="institute" />
              <FormikControl control="input" label="Year completed (or expected)" name="yearCompleted" />
              <FormikControl control="textarea" label="Description (optional)" name="description" left={<Leftword max={300} current={formik.values.description}  />} />


            </div>

            <div className="">
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
              >
                Save
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
        )
      }
    </Formik>
  );
};

