import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { useAddReferencesMutation, useUpdateReferencesMutation } from '../../../../../features/references/referencesApi'
import Leftword from '../../../Atoms/utils/Leftword'
import FormikControl from '../../../Atoms/Forms/FormikControl'

export default function RefereesForm({ setOpen, lineNo, prevData }) {
  const { userId } = useSelector(state => state.auth.user)
  const [addReferences, { data }] = useAddReferencesMutation()
  const [updateReferences, { data: updateData }] = useUpdateReferencesMutation()
  const initialValues = {
    name: prevData?.name || "",
    contactNo: prevData?.contactNo || "",
    emailID: prevData?.emailID || "",
    company: prevData?.company || "",
    relationship: prevData?.relationship || "",
    linkedinProfileLink: prevData?.linkedinProfileLink || "",
    description: prevData?.description || "",
  }
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    contactNo: Yup.string().matches(phoneRegExp, 'Phone number is not valid').max(11, "To Long").required("Phone number is required"),
    emailID: Yup.string().email("Must be valid email address").required("Email is required"),
    relationship: Yup.string(),
    company: Yup.string(),
    linkedinProfileLink: Yup.string().url("Must be give valid url"),
    description: Yup.string().max(300),

  })

  const onSubmit = values => {
    if (prevData?.name) {
      updateReferences({ ...prevData, ...values })
    } else {
      addReferences({ ...values, lineNo: lineNo + 1, userId })
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
            <h3 className='text-[#051532] text-2xl mb-2 font-medium'>Add referee</h3>
            <p>Managers, supervisors or colleagues make for great referees. Submit their details to give potential employers greater confidence in your abilities.</p>

            <div className="sp space-y-4 py-5">

              <FormikControl control="input" type="text" label="Name of your referee" name="name" />
              <FormikControl control="input" type="text" label="Phone number" name="contactNo" />
              <FormikControl control="input" type="email" label="Email Address" name="emailID" />
              <FormikControl control="input" type="text" label="Relationship" name="relationship" />
              <FormikControl control="input" type="text" label="Organisation" name="company" />
              <FormikControl control="input" type="url" label="Linkedin (optional)" name="linkedinProfileLink" />
              <FormikControl control="textarea" label="Description(optional)" name="description" />
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
