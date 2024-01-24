import { Form, Formik } from 'formik';
import React, { useEffect } from 'react'
import * as Yup from 'yup';
import { useGetProfileDetailsQuery, useProfileVisibleMutation } from '../../../../../features/profile/profileApi';
import FormikControl from '../../../Atoms/Forms/FormikControl';
const options = [
  { key: "Public", value: "0" },
  { key: "Private", value: "1" }
]

export default function ProfileVisibilityForm({ open, setOpen }) {
  const { data: details } = useGetProfileDetailsQuery()
  const [profileVisible, { data }] = useProfileVisibleMutation()

  const visibility = details?.data?.visibility === 1 ? "1" : "0"

  const initialValues = {
    visibility: visibility || "",
  }
  const validationSchema = Yup.object({
    visibility: Yup.string().required(),
  })
  const onSubmit = values => {
    profileVisible({
      visibility: values.visibility === '0' ? 0 : 1
    })

  }
  useEffect(() => {
    if (data?.isSuccess) {
      setOpen(false)
    }
  }, [setOpen, data?.isSuccess])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >

      {
        formik => (
          <Form>
            <h3 className='text-[#051532] text-2xl mb-2 font-medium'>Profile privacy setting</h3>
            <p>Set your profile to standard so hiring businesses can find you when they’re searching for candidates. Find out more about the Terms and conditions and Privacy notice and consent declaration.</p>

            <div className="sp space-y-4 py-5">

              <FormikControl control="radio" label={"Visibility"} name="visibility" options={options} />

            </div>

            <div className="mt-3">
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
