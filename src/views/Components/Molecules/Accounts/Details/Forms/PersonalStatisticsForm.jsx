import { Form, Formik } from 'formik'
import * as yup from 'yup';
import React, { useEffect } from 'react'
import Loading from '../../../../Atoms/Alert/Loading'
import FormikControl from '../../../../Atoms/Forms/FormikControl'
import { useProfileUpdateMutation } from '../../../../../../features/profile/profileApi';

const marriedOptions = [
    { key: "Married", value: "1" },
    { key: "Not Married", value: "2" }
]
const drivingOptions = [
    { key: "yes", value: "3" },
    { key: "No", value: "4" }
]


export default function PersonalStatisticsForm({ setOpen, prevData }) {

    const [profileUpdate, { data: updateData, isLoading }] = useProfileUpdateMutation()
    const initialValues = {
        age: prevData?.age || "",
        isMarried: prevData?.isMarried ? "1" : "2",
        yearofGraduation: prevData?.yearofGraduation || '',
        currentSalary: prevData?.currentSalary || '',
        expectedSalary: prevData?.expectedSalary || '',
        drivingLicense: prevData?.drivingLicense ? "3" : "4",
    }
    const validationSchema = yup.object({
        age: yup.number().typeError("Only number is requried"),
        isMarried: yup.string(),
        yearofGraduation: yup.number().typeError("Only number is requried").max(2030, "Must Be Less Than Or Equal To 2030").min(1971, "Must Be Greater Than Or Equal To 1971"),
        currentSalary: yup.number().typeError("Only number is requried").max(1000000, "Must Be Less Than Or Equal To 1000000"),
        expectedSalary: yup.number().typeError("Only number is requried").max(1000000, "Must Be Less Than Or Equal To 1000000"),
        drivingLicense: yup.string(),
    })
    const onSubmit = values => {
        profileUpdate({
            ...prevData,
            age: Number(values.age),
            yearofGraduation: Number(values.yearofGraduation),
            currentSalary: Number(values.currentSalary),
            expectedSalary: Number(values.expectedSalary),
            isMarried: values.isMarried === "1" ? true : false,
            drivingLicense: values.drivingLicense === "3" ? true : false,
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
                            <FormikControl control="input" type="text" label="Age" name="age" />
                            <FormikControl control="radio" label="Martial Status" name="isMarried" options={marriedOptions} />
                            <FormikControl control="input" type="text" label="Year of Graduation" name="yearofGraduation" />
                            <FormikControl control="input" type="text" label="Current Salary" name="currentSalary" />
                            <FormikControl control="input" type="text" label="Expected Salary" name="expectedSalary" />
                            <FormikControl control="radio" options={drivingOptions} label="Do you have Driving License" name="drivingLicense" />

                            {/* <FormikControl control="radio" label="Gender" name="gender" options={radioOptions} /> */}
                            {/* <FormikControl control="date" type="text" label="Date of birth" name="dob" /> */}



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
