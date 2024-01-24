import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'
import { useForgotPasswordMutation } from '../../../../features/auth/registerApi'
import Loading from '../../Atoms/Alert/Loading'
import Warning from '../../Atoms/Alert/Warning'
import Cancle from '../../Atoms/Buttons/Cancle'
import FormikControl from '../../Atoms/Forms/FormikControl'

export default function ForgotPassword() {
    const navigate = useNavigate()
    const { isSuccess, message } = useSelector((state) => state.register)
    const [forgotPassword, { data,isLoading,isSuccess:iSuccess }] = useForgotPasswordMutation()
    const auth = JSON.parse(localStorage.getItem('auth'))
    const initialValues = {
        email: '',
    }
    const validationSchema = yup.object({
        email: yup.string().email("Enter a valid email address. For example name@mail.com"),
    })
    const onSubmit = values => {
        forgotPassword(values)
    }

    useEffect(() => {
        if (data?.isSuccess) {
            navigate("/create-account/enter-code");
        }
        if (!data?.isSuccess) {
            data?.message === "your email already register with us" && navigate("/create-account/enter-code")
        }
    }, [data?.isSuccess, data?.message, navigate])
    

    return (
        <div className='text-lg w-full max-w-[650px] mx-auto sm:px-10 py-10'>
            <div className="flex items-center gap-2">
                {isLoading && <Loading />}
                {!isSuccess && iSuccess && !auth.isSuccess ? <Warning message={message || auth?.message} /> : null}
           
            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                {
                    formik => (
                        <Form>
                            <h3 className='text-[#051532] text-[32px] font-bold'>Forgot your password</h3>
                            <p>We will send you a code. Where would you like it sent?</p>

                            <div className="sp space-y-4 py-5">

                                <FormikControl control="input" type="email" label="Email address" name="email" />

                            </div>
                            <div className=" flex gap-3 items-center">
                                <button type="submit" className="btn-sky px-20 py-[10px] text-base font-semibold">Next</button>
                                <Cancle />
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
