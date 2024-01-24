import React, { useEffect } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Back from '../../../Atoms/Buttons/Back';
import { useSelector } from 'react-redux';
import Warning from '../../../Atoms/Alert/Warning';
import { useResendotpMutation, useVerifyMutation } from '../../../../../features/auth/registerApi';
import Loading from '../../../Atoms/Alert/Loading';
import Cancle from '../../../Atoms/Buttons/Cancle';

const EnterCode = () => {
    const { email, isSuccess, message } = useSelector((state) => state.register)
    const auth = JSON.parse(localStorage.getItem('auth'))
    const [verify, { data, isLoading }] = useVerifyMutation()
    const [resendotp, { isLoading: otpLoading }] = useResendotpMutation()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            otp: '',
        },
        validationSchema: yup.object({
            otp: yup.string().min(6, "OTP must atleast 6 characters").required("OTP is required")
        }),
        onSubmit: values => {
            verify({
                ...values,
                email: email || auth.email
            })
        },
    });

    const resendOtp = () => {
        resendotp({ email: email || auth.email })
    }


  useEffect(() => {
    if (data?.isSuccess) {
        navigate("/businesses/create-account/create-password");
    }
  }, [data?.isSuccess, navigate])
  

    return (
        <div className='text-lg w-full max-w-[650px] mx-auto sm:px-10 py-10'>
            <Back />
            {isLoading || otpLoading ? <Loading /> : null}
            <h2 className='text-[32px] font-bold'>Enter code</h2>
            <div className="flex flex-col gap-4 pt-5">
                <p>Step 3 of 4</p>
                <p>We sent a code to <span className='font-bold'>{email || auth?.email}</span>.</p>
                <div className="flex items-center gap-2">
                    {!isSuccess && !auth.isSuccess ? <Warning message={message || auth?.message} /> : null}
                    {(message || auth?.message) === "your email already register with us" && <p
                        onClick={resendOtp} className='text-base text-primary-700 hover:underline cursor-pointer mt-2 capitalize'>resend otp</p>}
                </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="py-5">
                    <div className="">
                        <div className="">
                            <label htmlFor="code" className="block mb-2 text-base font-bold text-gray-900">Code</label>
                            <input
                                id="otp"
                                name="otp"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.otp}
                                className="bg-gray-50 border border-gray-600 text-gray-900 text-base font-normal focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        {formik.errors.otp && <Warning message={formik.errors.otp} />}
                    </div>
                </div>


                <div className=" flex gap-3 items-center">
                    <button type="submit" className="btn-sky px-20 py-[10px] text-base font-semibold">Next</button>
                    <Cancle />
                </div>
            </form>
        </div>
    );
};

export default EnterCode;