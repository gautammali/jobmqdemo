import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import Back from '../../../Atoms/Buttons/Back';
import { useSelector } from 'react-redux';
import Warning from '../../../Atoms/Alert/Warning';
import Loading from '../../../Atoms/Alert/Loading';
import { useSignupEmployerMutation } from '../../../../../features/auth/registerApi';
import Cancle from '../../../Atoms/Buttons/Cancle';
import FormikControl from '../../../Atoms/Forms/FormikControl';


const EnterAnEmail = () => {
    const navigate = useNavigate()
    const { message } = useSelector((state) => state.register)
    const [signupEmployer, { data, isLoading }] = useSignupEmployerMutation()

    const initialValues = {
        firstName: '',
        lastName: '',
        organizationName: '',
        email: '',
        contactNo: "string",
        landLine: 0,
        profilePic: "string"
    }
    const validationSchema = yup.object({
        firstName: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40).required("First name is required"),
        lastName: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40).required("Last name is required"),
        organizationName: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(40).required("Organization name is required"),
        email: yup.string().email("Enter a valid email address. For example name@mail.com").required("Email is required"),
    })
    const onSubmit = values => {
        signupEmployer(values)
    }


    useEffect(() => {
        if (data?.isSuccess) {
            navigate("/businesses/create-account/enter-code");
        }
        if (!data?.isSuccess) {
            data?.message === "your email already register with us" && navigate("/businesses/create-account/enter-code")
        }

    }, [data?.isSuccess, data?.message, navigate])



    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            {
                formik => (
                    <Form>
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


                            <div className="sp space-y-4 py-5">
                                <FormikControl control="input" label="First name" name="firstName" />
                                <FormikControl control="input" label="Last name" name="lastName" />
                                <FormikControl control="input" label="Organization name" name="organizationName" />
                                <FormikControl control="input" type="email" label="Email address" name="email" />
                            </div>

                            <div className=" flex gap-3 items-center">
                                <button type='submit' className="btn-sky px-20 py-[10px] text-base font-semibold">Next</button>
                                <Cancle />
                            </div>
                        </div>
                    </Form>
                )}
        </Formik>
    );
};

export default EnterAnEmail;