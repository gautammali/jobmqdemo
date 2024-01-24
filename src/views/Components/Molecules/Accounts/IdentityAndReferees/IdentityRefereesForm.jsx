import { Form, Formik } from 'formik'
import * as yup from 'yup';
import React, { useEffect } from 'react'
import Loading from '../../../Atoms/Alert/Loading';
import FormikControl from '../../../Atoms/Forms/FormikControl';
import { useProfileUpdateMutation } from '../../../../../features/profile/profileApi';


const familyOptions = [
  { key: "yes", value: "1" },
  { key: "No", value: "2" }
]


export default function IdentityRefereesForm({ setOpen, prevData }) {

  const [profileUpdate, { data: updateData, isLoading }] = useProfileUpdateMutation()
  const initialValues = {
    passportNo: prevData?.passportNo || "",
    passportIssueDate: prevData?.passportIssueDate ? new Date(prevData?.passportIssueDate) : "",
    passportExpiryDate: prevData?.passportExpiryDate ? new Date(prevData?.passportExpiryDate) : "",
    sponserName: prevData?.sponserName || '',
    localIDNo: prevData?.localIDNo || '',
    visaStatus: prevData?.visaStatus || "",
    haveFamilyBook: prevData?.haveFamilyBook ? "1" : "2",
  }

  // (?=[a-zA-Z0-9]{8,20}$)
  const validationSchema = yup.object({
    passportNo: yup.string().matches(/(?=[a-zA-Z0-9]$)/, "aA-zZ and 0-9 is required"),
    passportIssueDate: yup.date().default(new Date()).max(new Date(), "less then today"),
    passportExpiryDate: yup.date().default(new Date()),
    localIDNo: yup.number().typeError("Only number is requried"),
    sponserName: yup.string(),
    visaStatus: yup.string(),
    haveFamilyBook: yup.string(),
  })
  const onSubmit = values => {
    profileUpdate({
      ...prevData,
      ...values,
      haveFamilyBook: values.haveFamilyBook === "1" ? true : false,
    });
  }




  useEffect(() => {
    if (updateData?.isSuccess) {
      setOpen(false)
    }
  }, [setOpen, updateData?.isSuccess])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >

      {
        formik => (
          <Form>

            {isLoading && <Loading />}
            <h3 className='text-[#051532] text-2xl mb-2 font-medium'>Edit personal statistics</h3>
            <p className='text-[#4f4f4f]'>Aside from your name, your personal details aren’t shown on your profile or shared with businesses. You can choose to show your preferred name. Some details are prefilled with information you cannot edit. To correct or update prefilled information, contact Services Australia.</p>


            <div className="flex  flex-col gap-4 py-5">
              <FormikControl control="input" type="text" label="Passport Number" name="passportNo" />
              <FormikControl control="date" label="Passport Issue Date" name="passportIssueDate" />
              <FormikControl control="date" type="text" label="Passport Expiry Date" name="passportExpiryDate" />
              <FormikControl control="input" type="text" label="National ID Number" name="localIDNo" />
              <FormikControl control="input" type="text" label="Current Employer Name" name="sponserName" />
              <FormikControl control="input" type="text" label="Visa Status" name="visaStatus" />
              <FormikControl control="radio" options={familyOptions} label="Do you have family book ? (Applicable only for UAE Nationals)" name="haveFamilyBook" />





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
        )}
    </Formik>
  );
};
