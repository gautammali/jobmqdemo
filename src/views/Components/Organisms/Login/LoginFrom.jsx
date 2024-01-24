import React from 'react';
import { FiAlertCircle } from "react-icons/fi"
import { NavLink, useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import Loading from '../../Atoms/Alert/Loading';
import GLogin from '../../Molecules/Register/GLogin';
import Linkedin from '../../Molecules/Register/Linkedin';
import { useLoginMutation } from '../../../../features/auth/authApi';
import TextField from '../../Atoms/Inputs/TextField';
import { Helmet } from 'react-helmet-async';
// import FbLogin from '../../Molecules/Register/FbLogin';

const LoginFrom = () => {
    const navigate = useNavigate()
    const [login, { data, isLoading, isSuccess }] = useLoginMutation()
    const initialValues = {
        userName: '',
        password: ""
    }
    const validationSchema = yup.object({
        userName: yup.string().email("Enter a valid email address").required("email is required"),
        password: yup.string("Enter your current password").required("password is required").min(6, "Must have atleast 6 characters")
    })
    const onSubmit = values => {
        login(values)
    }

    if (data?.isSuccess && isSuccess) {
        setTimeout(() => {
            if (data?.token?.userType === 1) {
                navigate("/individuals/profile");
            }
            if (data?.token?.userType === 2) {
                navigate("/businesses/profile");
            }

        }, 100);
    }

    return (
        <>
            <Helmet>
                <title>Login | Businesses</title>
            </Helmet>
            <div className='bg-site-bg-100 py-10'>
                <div className=' bg-white w-full shadow-lg rounded-md max-w-[1137px] mx-auto px-2 sm:px-10 py-10'>
                    {isLoading && <Loading />}
                    <div className="w-[873px] mx-auto">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}
                        >
                            <Form className='flex flex-col gap-3'>
                                <h1 className='font-roboto text-[50px] font-light leading-[75px] text-site-bg-300'>Sign In</h1>
                                <TextField name={'userName'} label={'Email'} type={'email'} placeholder={'Email'} />
                                <TextField name={'password'} label={'Password'} type={'password'} placeholder={'Password'} />


                                <button type='submit' className="w-full bg-site-bg-300 text-white rounded h-18 text-xl-22">Sign in</button>
                                <span className='text-lg font-roboto font-normal text-site-text-200 flex items-center gap-2'>
                                    <FiAlertCircle />
                                    <NavLink
                                        className={"text-site-bg-300 font-semibold"}
                                        to={'/individuals/create-account'}>Create a JOBMQ account</NavLink>
                                    if you don't have one already.
                                </span>
                            </Form>
                        </Formik>


                        <div className="flex items-center justify-center gap-2.5 mt-10">
                            {/* <FbLogin /> */}
                            <GLogin />
                            <Linkedin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginFrom;