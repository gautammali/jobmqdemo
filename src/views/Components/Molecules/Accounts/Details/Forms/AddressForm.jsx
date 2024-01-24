import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import Loading from '../../../../Atoms/Alert/Loading';
import FormikControl from '../../../../Atoms/Forms/FormikControl';
import { useProfileUpdateMutation } from '../../../../../../features/profile/profileApi';
import { useGetKeywordValuesQuery } from '../../../../../../features/keyword/keywordApi';

export default function AddressForm({ setOpen, prevData }) {

    const [profileUpdate, { data: updateData, isLoading }] = useProfileUpdateMutation()
    const { data } = useGetKeywordValuesQuery(1001)
    const pervCountry = data?.data?.find(i => i.valueID === prevData.country)
    const initialValues = {
        address1: prevData?.address1 || '',
        address2: prevData?.address2 || '',
        city: prevData?.city || '',
        country: pervCountry ? pervCountry : { value: "Select" }
    }
    const validationSchema = yup.object({
        address1: yup.string().max(100),
        address2: yup.string().max(100),
        city: yup.string(),
        country: yup.object()
    })
    const onSubmit = values => {
        profileUpdate({
            ...prevData,
            ...values,
            country: values?.country?.valueID || null
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
                        <h3 className='text-[#051532] text-2xl mb-2 font-medium'>Edit Address</h3>
                        <p className='text-[#4f4f4f]'>Aside from your name, your personal details aren’t shown on your profile or shared with businesses. You can choose to show your preferred name. Some details are prefilled with information you cannot edit. To correct or update prefilled information, contact Services Australia.</p>


                        <div className="flex  flex-col gap-4 py-5">
                            <FormikControl control="input" type="text" label="Address 1" name="address1" />
                            <FormikControl control="input" type="text" label="Address 2" name="address2" />

                            <FormikControl control="input" type="text" label="City" name="city" />

                            <FormikControl control="select" label="Country" name="country" options={data?.data} />



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
}
