import { Form, Formik } from 'formik';
import React from 'react'
import * as yup from 'yup';
import { useChangePasswordMutation } from '../../../../../../features/profile/profileApi';
import FormikControl from '../../../../Atoms/Forms/FormikControl';

export default function ChangePasswordForm({ setOpen }) {

    const [changePassword, { data }] = useChangePasswordMutation()
    const initialValues = {
        oldPassword: '',
        password: '',
        password2: '',
    }

    const validationSchema = yup.object({
        oldPassword: yup.string("Enter your current password").required("password is required").min(6, "Must have atleast 6 characters"),
        password: yup.string("Enter your current password").required("password is required").min(6, "Must have atleast 6 characters"),
        password2: yup.string("Enter your current password").required("password is required").min(6, "Must have atleast 6 characters"),
    })

    const onSubmit = values => {
        if (values.password === values.password2) {
            changePassword(values)
        }

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
                        <h3 className='text-[#051532] text-2xl mb-2 font-medium'>Change Password</h3>
                        <p>Managers, supervisors or colleagues make for great referees. Submit their details to give potential employers greater confidence in your abilities.</p>

                        <div className="sp space-y-4 py-5">

                            <FormikControl control="input" type="password" label="Old password" name="oldPassword" />
                            <FormikControl control="input" type="password" label="Password" name="password" />
                            <FormikControl control="input" type="password" label="Confirm Password" name="password2" />
                        </div>
                        <div className="">
                            <button
                                type="submit"
                                className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
                            >
                                Change Password
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
