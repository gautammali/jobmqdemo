import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Atoms/Alert/Loading';
import Warning from '../../Atoms/Alert/Warning';
import Cancle from '../../Atoms/Buttons/Cancle';
import { useEnterEmailMutation } from '../../../../features/auth/registerApi';

export default function ForgotPassword() {

    const navigate = useNavigate()
    const { message } = useSelector((state) => state.register)
    const [enterEmail, { data, isLoading }] = useEnterEmailMutation()
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: yup.object({
            email: yup.string().email("Enter a valid email address. For example name@mail.com"),
        }),
        onSubmit: values => {
            enterEmail(values)
        },
    });

    if (data?.isSuccess) {
        navigate("/create-account/enter-code");
    }
    if (!data?.isSuccess) {
        data?.message === "your email already register with us" && navigate("/create-account/enter-code")
    }


    return (
        <div className='text-lg w-full max-w-[650px] mx-auto sm:px-10 py-10'>

            <h2 className='text-[32px] font-bold'>Forgot password</h2>
            {isLoading && <Loading />}
            <div className="flex flex-col gap-4 pt-5">
                {message ? <Warning message={message} /> : null}
            </div>
            <form onSubmit={formik.handleSubmit}>

                <div className="py-5 flex flex-col gap-5">


                    <div className="">
                        <div className="">
                            <label htmlFor="email" className="block mb-2 text-base font-bold text-gray-900">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder="name@email.com"
                                className="bg-gray-50 border border-gray-600 text-gray-900 text-base font-normal focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        {formik.errors.email && <Warning message={formik.errors.email} />}
                    </div>

                </div>


                <div className=" flex gap-3 items-center">
                    <button type="submit" className="btn-sky px-20 py-[10px] text-base font-semibold">Next</button>
                    <Cancle />
                </div>
            </form>
        </div>
    );

}
