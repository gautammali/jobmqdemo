import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Back from '../../Atoms/Buttons/Back';
import { useSelector } from 'react-redux';
import Warning from '../../Atoms/Alert/Warning';
import Loading from '../../Atoms/Alert/Loading';
import { useEnterEmailMutation } from '../../../../features/auth/registerApi';
import Cancle from '../../Atoms/Buttons/Cancle';


const EnterAnEmail = () => {
    const navigate = useNavigate()
    const { message } = useSelector((state) => state.register)
    const [enterEmail, { data, isLoading }] = useEnterEmailMutation()
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: yup.object({
            firstName: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40).required(),
            lastName: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40).required(),
            email: yup.string().email("Enter a valid email address. For example name@mail.com"),
        }),
        onSubmit: values => {
            enterEmail(values)
        },
    });

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
            <Back />
            <h2 className='text-[32px] font-bold'>Enter an email</h2>
            {isLoading && <Loading />}
            <div className="flex flex-col gap-4 pt-5">
                <p>Step 2 of 4</p>
                <p>Enter the email address you will use to sign in to your JOBMQ account. We will email you a code that you will need to enter on the next screen.</p>
                <p>We will send an email to this address if you receive a message in your JOBMQ inbox.</p>
                {message ? <Warning message={message} /> : null}
            </div>
            <form onSubmit={formik.handleSubmit}>

                <div className="py-5 flex flex-col gap-5">
                <div className="">
                    <div className="">
                        <label htmlFor="firstName" className="block mb-2 text-base font-bold text-gray-900">First name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            className=" border border-gray-300 rounded-md text-gray-900 text-base font-normal focus:ring-sky-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    {formik.errors.firstName && formik.touched.firstName ? <Warning message={formik.errors.firstName} /> : null}
                </div>

                <div className="">
                    <div className="">
                        <label htmlFor="lastName" className="block mb-2 text-base font-bold text-gray-900">Last name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            className=" border border-gray-300 rounded-md text-gray-900 text-base font-normal focus:ring-sky-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                    {formik.errors.lastName && formik.touched.lastName ? <Warning message={formik.errors.lastName} />:null}
                </div>

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
};

export default EnterAnEmail;