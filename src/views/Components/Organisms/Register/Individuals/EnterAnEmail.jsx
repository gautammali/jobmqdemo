import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import Warning from '../../../Atoms/Alert/Warning';
import Loading from '../../../Atoms/Alert/Loading';
import { useEnterEmailMutation } from '../../../../../features/auth/registerApi';
import TextField from '../../../Atoms/Inputs/TextField';
import { Helmet } from 'react-helmet-async';


const EnterAnEmail = () => {
    const navigate = useNavigate()
    const { message } = useSelector((state) => state.register)
    const [enterEmail, { data, isLoading }] = useEnterEmailMutation()

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
    }
    const validationSchema = yup.object({
        firstName: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40).required(),
        lastName: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40).required(),
        email: yup.string().email("Enter a valid email address. For example name@mail.com").required("email is required"),
    })
    const onSubmit = values => {
        enterEmail(values)
    }


    useEffect(() => {
        if (data?.isSuccess) {
            navigate("/individuals/create-account/enter-code");
        }
        if (!data?.isSuccess) {
            data?.message === "your email already register with us" && navigate("/individuals/create-account/enter-code")
        }

    }, [data?.isSuccess, data?.message, navigate])



    return (
        <>
            <Helmet>
                <title>Enter an email | JOBMQ</title>
            </Helmet>
            <div className='bg-site-bg-100 py-10'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >

                    <Form>
                        <div className='text-lg w-full max-w-[1137px] mx-auto boxShadow2 bg-white rounded-xl sm:px-10 py-10 my-10'>
                            <h1 className='font-roboto text-[50px] font-light leading-[75px] text-site-bg-300'>Enter an email</h1>
                            {isLoading && <Loading />}
                            <div className="flex flex-col gap-4 pt-5">
                                {message ? <Warning message={message} /> : null}
                            </div>


                            <div className="grid grid-cols-2 gap-4">
                                <TextField name={'firstName'} label={'First name'} type={'text'} placeholder={''} />
                                <TextField name={'lastName'} label={'Last name'} type={'text'} placeholder={''} />
                                <TextField name={'email'} label={'Email'} type={'email'} placeholder={''} />
                                <TextField name={'organizationName'} label={'Organization name'} type={'text'} placeholder={''} />

                            </div>

                            <div className="mt-5">
                                <button type='submit' className="bg-site-bg-300 rounded  text-white w-full px-20 py-[10px] text-lg-22 ">Next</button>

                            </div>
                        </div>
                    </Form>

                </Formik>
            </div>
        </>
    );
};

export default EnterAnEmail;