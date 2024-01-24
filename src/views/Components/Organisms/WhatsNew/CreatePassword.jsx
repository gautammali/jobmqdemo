import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik'
import Back from '../../Atoms/Buttons/Back';
import Cancle from '../../Atoms/Buttons/Cancle';
import { useCreatePasswordMutation } from '../../../../features/auth/registerApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../../features/auth/authApi';
import Loading from '../../Atoms/Alert/Loading';
import Warning from '../../Atoms/Alert/Warning';

const CreatePassword = () => {
    const [pass, setPass] = useState(undefined)
    const [createpassword, { data: passwordData }] = useCreatePasswordMutation()
    const [login, { data, isLoading, isSuccess }] = useLoginMutation()
    const { email } = useSelector((state) => state.register)
    const auth = JSON.parse(localStorage.getItem('auth'))
    const navigate = useNavigate()


    const formik = useFormik({
        initialValues: {
            password: '',
            password2: '',
        },
        validationSchema: yup.object({
            password: yup.string("Enter your current password").required("password is required").min(6, "Must have atleast 6 characters"),
            password2: yup.string("Enter your current password").required('Please retype your password.')
            .oneOf([yup.ref('password')], 'Your passwords do not match.')
        }),
        onSubmit: values => {
            const { password, password2 } = values
            if (password === password2) {
                setPass(password)
                createpassword({
                    email: auth.email || email,
                    password
                })

            }
        },
    });
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
        return () => {

        }
    }, [data?.isSuccess, isSuccess, navigate])


    return (
        <div className='text-lg w-full max-w-[650px] mx-auto sm:px-10 py-10'>
            {isLoading && <Loading />}
            <Back />
            <h2 className='text-[32px] font-bold'>Create passowrd</h2>
            <div className="flex flex-col gap-4 pt-5">
                <p>Step 4 of 4</p>
                <p>Your password must have at least 7 characters and includes at least 1 number</p>
                <p>Do not show you password</p>

            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className="py-5">
                    <div className="">
                        <div className="">
                            <label htmlFor="password" className="block mb-2 text-base font-bold text-gray-900">Password</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}

                                className="bg-gray-50 border border-gray-600 text-gray-900 text-base font-normal focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        {formik.errors.password && <Warning message={formik.errors.password} />}
                    </div>
                </div>

                <div className="py-5">
                    <div className="">
                        <div className="">
                            <label htmlFor="re-enter-password" className="block mb-2 text-base font-bold text-gray-900">Re-Enter Password</label>
                            <input
                                id="password2"
                                type="password"
                                name="password2"
                                onChange={formik.handleChange}
                                value={formik.values.password2}
                                className="bg-gray-50 border border-gray-600 text-gray-900 text-base font-normal focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        {formik.errors.password2 && <Warning message={formik.errors.password2} />}
                    </div>

                </div>


                <div className=" flex gap-3 items-center">
                    <button type='submit' className="btn-sky px-20 py-[10px] text-base font-semibold">Next</button>
                    <Cancle />
                </div>
            </form>
        </div>
    );
};

export default CreatePassword;