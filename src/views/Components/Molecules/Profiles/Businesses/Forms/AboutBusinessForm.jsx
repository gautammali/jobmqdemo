import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../../../Atoms/Forms/FormikControl'
import { useProfileUpdateMutation } from '../../../../../../features/profile/profileApi'
import Leftword from '../../../../Atoms/utils/Leftword'

export default function AboutBusinessForm({ setOpen, prevData }) {
  const [profileUpdate, { data }] = useProfileUpdateMutation()
  const initialValues = {
    aboutUs: prevData?.aboutUs || "",
    organizationName: prevData?.organizationName || "",
    linkedInProfile: prevData?.linkedInProfile || "",
    youTubeProfileUrl: prevData?.youTubeProfileUrl || "",
  }

  const validationSchema = Yup.object({
    aboutUs: Yup.string().max(3000).required("The field is required!"),
    organizationName: Yup.string().required(),
    linkedInProfile: Yup.string(),
    youTubeProfileUrl: Yup.string().url("Required Valid URL"),
  })

  const onSubmit = values => {
    profileUpdate({
      ...prevData,
      ...values
    });
  }

  if (data?.isSuccess) {
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
            <h3 className='text-[#051532] text-2xl mb-2 font-medium'>Edit about company</h3>
            <p>Personal introductions are a way to tell employers who you are. Highlight your top skills, experience, education and interests. This is one of the first things employers will see on your profile.</p>

            <div className="sp space-y-4 py-5">


              <FormikControl control="textarea" label="Write a short summary about your company" name="aboutUs" left={<Leftword max={3000} current={formik.values.aboutUs} />} />


              <FormikControl control="input" label="Organization name" name="organizationName" />

              <FormikControl control="inputLink" type="text" label="Company linkedIn page" name="linkedInProfile" pre="https://www.linkedin.com/in/" />



              <FormikControl control="input" type="text" label="Video of your company introduction" name="youTubeProfileUrl" />

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
