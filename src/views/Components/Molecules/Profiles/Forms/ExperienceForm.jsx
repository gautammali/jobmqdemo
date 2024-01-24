import { Form, Formik } from 'formik';
import * as yup from 'yup';
import React from 'react'
import { useSelector } from 'react-redux';
import Loading from '../../../Atoms/Alert/Loading';
import { useAddExperienceMutation, useUpdateExperienceMutation } from '../../../../../features/experience/experienceApi';
import FormikControl from '../../../Atoms/Forms/FormikControl';
import Leftword from '../../../Atoms/utils/Leftword';
import moment from 'moment';


export default function ExperienceForm({ setOpen, lineNo, prevData }) {
  const { userId } = useSelector(state => state.auth.user)
  const [addExperience, { data, isLoading }] = useAddExperienceMutation();
  const [updateExperience, { data: updateData }] = useUpdateExperienceMutation()

  const initialValues = {
    designation: prevData?.designation || "",
    company: prevData?.company || "",
    startDate: prevData?.startDate ? new Date(prevData?.startDate) : "",
    endDate: prevData?.endDate ? new Date(prevData?.endDate) : "",
    currentlyInRole: prevData?.currentlyInRole ? true : false,
    description: prevData?.description || ""
  }

  const validationSchema = yup.object({
    designation: yup.string().required("Role is required"),
    company: yup.string().required("Company is required."),
    startDate: yup.date().default(function () {
      return new Date();
    }),
    endDate: yup.date().when("currentlyInRole", {
      is: false,
      then: yup.date()

    }),
    currentlyInRole: yup.boolean(),
    description: yup.string().max(300)
  })

  const onSubmit = values => {
    values = {
      startDate: moment(values.startDate).format("YYYY-MM-DD"),
      endDate: moment(values.endDate).format("YYYY-MM-DD")
    }
    if (prevData?.designation) {
      updateExperience({
        ...prevData,
        ...values,
        currentlyInRole: values.currentlyInRole ? 1 : 0,
        endDate: values.currentlyInRole ? null : values.endDate,
      })
    } else {
      addExperience({
        ...values,
        currentlyInRole: values.currentlyInRole ? 1 : 0,
        endDate: values.currentlyInRole ? null : values.endDate,
        userId,
        lineNo: lineNo + 1,
      })
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
            <h3 className='text-[#051532] text-2xl mb-2 font-medium'>{prevData?.designation ? "Edit" : "Add"} Experience</h3>
            <p>Personal introductions are a way to tell employers who you are. Highlight your top skills, experience, education and interests. This is one of the first things employers will see on your profile.</p>
            {isLoading && <Loading />}
            <div className="sp space-y-4 py-5">

              <FormikControl control="input" label="Occupation" name="designation" />
              <FormikControl control="input" label="Company" name="company" />

              <FormikControl control="date" label="Start Date" name="startDate" />
              <FormikControl disabled={formik.values.currentlyInRole} control="date" label="End Date" name="endDate" />

              <FormikControl control="checkbox" name="currentlyInRole" label="Currently in role" />

              <FormikControl control="textarea" label="Description of your duties and successes (optional)" name="description" />
              <Leftword max={300} current={formik.values.description} />


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
  )
}
