import React from 'react'
import { useDeactiveAccountMutation } from '../../../../../../features/profile/profileApi'
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import FormikControl from '../../../../Atoms/Forms/FormikControl';
import { useSelector } from 'react-redux';

export default function DeleteAccountForm({ setOpen }) {
    const { email } = useSelector(state => state.auth.user)
    const [deactiveAccount, { data }] = useDeactiveAccountMutation()
    const initialValues = {
        isDeactivate: "",
    }

    const validationSchema = yup.object({
        isDeactivate: yup.string().email().required("Please type your email"),
    })

    const onSubmit = values => {
        if (values.isDeactivate === email) {
            deactiveAccount(true)
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
                        <h3 className='text-[#051532] text-2xl mb-2 font-medium'>Deactive your account</h3>
                        <p>Please type <span className='font-bold '>{email}</span> to confirm </p>

                        <div className="sp space-y-4 py-5">

                            <FormikControl control="input" type="email" label="" name="isDeactivate" />

                        </div>
                        <div className="">
                            <button
                                type="submit"
                                className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
                            >
                                Confirm
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
