import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Form, Formik } from 'formik'
import Cancle from '../../../Atoms/Buttons/Cancle';
import { useCreatePasswordMutation } from '../../../../../features/auth/registerApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../../../features/auth/authApi';
import Loading from '../../../Atoms/Alert/Loading';
import FormikControl from '../../../Atoms/Forms/FormikControl';
import Back from '../../../Atoms/Buttons/Back';

const CreatePassword = () => {
    const [pass, setPass] = useState(undefined)
    const [createpassword, { data: passwordData }] = useCreatePasswordMutation()
    const [login, { data, isLoading, isSuccess }] = useLoginMutation()
    const { email } = useSelector((state) => state.register)
    const auth = JSON.parse(localStorage.getItem('auth'))
    const navigate = useNavigate()



    const initialValues = {
        password: '',
        password2: '',
    }
    const validationSchema = yup.object({
        password: yup.string("Enter your current password").required("password is required").min(6, "Must have atleast 6 characters"),
        password2: yup.string("Enter your current password").required('Please retype your password.')
            .oneOf([yup.ref('password')], 'Your passwords do not match.')
    })
    const onSubmit = values => {
        const { password, password2 } = values
        if (password === password2) {
            setPass(password)
            createpassword({
                email: auth.email || email,
                password
            })

        }
    }

    useEffect(() => {
        if (passwordData?.isSuccess) {
            login({
                userName: auth.email || email,
                password: pass
            })
        }

        return () => { }
    }, [auth.email, email, login, pass, passwordData])

    useEffect(() => {
        if (data?.isSuccess && isSuccess) {
            setTimeout(() => {
                navigate("/individuals/profile");
            }, 100);
        }

    }, [data?.isSuccess, isSuccess, navigate])


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
                            {isLoading && <Loading />}
                            <Back />
                            <h2 className='text-[32px] font-bold'>Create passowrd</h2>
                            <div className="flex flex-col gap-4 pt-5">
                                <p>Step 4 of 4</p>
                                <p>Your password must have at least 7 characters and includes at least 1 number</p>
                                <p>Do not show you password</p>

                            </div>

                            <div className="sp space-y-4 py-5">
                                <FormikControl control="input" type="password" label="Password" name="password" />
                                <FormikControl control="input" type="password2" label="password2" name="password2" />
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

export default CreatePassword;