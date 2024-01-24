import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import Loading from '../../../../Atoms/Alert/Loading';
import FormikControl from '../../../../Atoms/Forms/FormikControl';
import { useAddResumeMutation, useUpdateResumeMutation } from '../../../../../../features/resume/resumeApi';
import { useSelector } from 'react-redux';


export default function ResumeForm({ setOpen, prevData }) {
    // const { prevData } = prevprevData
    const [addResume, { data, isLoading }] = useAddResumeMutation()
    const [updateResume, { data: updateData }] = useUpdateResumeMutation()
    const { userId } = useSelector(state => state.auth.user)

    const radioOptions = [
        { key: "Male", value: "1" },
        { key: "Female", value: "2" },
        { key: "Others", value: "3" }
    ]

    const initialValues = {
        minSalary: prevData?.minSalary || '',
        maxSalary: prevData?.maxSalary || '',
        gender: String(prevData?.gender) || '',
    }
    const validationSchema = yup.object({
        minSalary: yup.number().typeError("please enter number"),
        maxSalary: yup.number().typeError("please enter number"),
        gender: yup.string()
    })
    const onSubmit = values => {
        if (prevData?.gender) {
            updateResume({
                ...prevData,
                gender: Number(values.gender),
                maxSalary: Number(values.maxSalary),
                minSalary: Number(values.minSalary),
                description: "description",
                desingnation: "desingnation",
            })

        } else {
            addResume({
                userId,
                gender: Number(values.gender),
                maxSalary: Number(values.maxSalary),
                minSalary: Number(values.minSalary),
                description: "description",
                desingnation: "desingnation",
            })
        }
    }

    useEffect(() => {
        if (data?.isSuccess || updateData?.isSuccess) {
            setOpen(false)
        }
    }, [data?.isSuccess, setOpen, updateData?.isSuccess])

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
                            <FormikControl control="input" type="text" label="Min salary" name="minSalary" />
                            <FormikControl control="input" type="text" label="Max salary" name="maxSalary" />
                            <FormikControl control="radio" label="Gender" name="gender" options={radioOptions} />



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
