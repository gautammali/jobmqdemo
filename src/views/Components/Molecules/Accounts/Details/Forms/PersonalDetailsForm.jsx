import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useProfileUpdateMutation } from '../../../../../../features/profile/profileApi';
import Loading from '../../../../Atoms/Alert/Loading';
import FormikControl from '../../../../Atoms/Forms/FormikControl';
import moment from 'moment';

const radioOptions = [
    { key: "Male", value: "1" },
    { key: "Female", value: "2" },
    { key: "Others", value: "3" }
]

const PersonalDetailsForm = ({ setOpen, prevData }) => {

    const [profileUpdate, { data: updateData, isLoading }] = useProfileUpdateMutation()

    const initialValues = {
        firstName: prevData?.firstName || '',
        lastName: prevData?.lastName || '',
        sponserName: prevData?.firstName || '',
        contactNo: prevData?.contactNo || '',
        gender: String(prevData?.gender) || '',
        dob: prevData?.dob ? new Date(prevData?.dob) : '',
    }
    const validationSchema = yup.object({
        firstName: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40),
        lastName: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40),
        sponserName: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40),
        contactNo: yup.number(),
        gender: yup.string(),
        dob: yup.date().max(new Date())
    })
    const onSubmit = values => {
        profileUpdate({
            ...prevData,
            ...values,
            dob: moment(values.dob).format("YYYY-MM-DD"),
            gender: Number(values.gender),
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
                        <h3 className='text-[#051532] text-2xl mb-2 font-medium'>Edit personal details</h3>
                        <p className='text-[#4f4f4f]'>Aside from your name, your personal details aren’t shown on your profile or shared with businesses. You can choose to show your preferred name. Some details are prefilled with information you cannot edit. To correct or update prefilled information, contact Services Australia.</p>


                        <div className="flex  flex-col gap-4 py-5">
                            <FormikControl control="input" type="text" label="First name" name="firstName" />
                            <FormikControl control="input" type="text" label="Last name" name="lastName" />
                            <FormikControl control="input" type="text" label="Preferred name" name="sponserName" />

                            <FormikControl control="input" type="text" label="Phone number" name="contactNo" />

                            <FormikControl control="radio" label="Gender" name="gender" options={radioOptions} />
                            <FormikControl control="date" type="text" label="Date of birth" name="dob" />



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

export default PersonalDetailsForm;