import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Back from '../../Atoms/Buttons/Back';
import Warning from '../../Atoms/Alert/Warning';
import Cancle from '../../Atoms/Buttons/Cancle';


const TermsOfUse = () => {
    const navigate = useNavigate()


    const formik = useFormik({
        initialValues: {
            trems: false,
            privacy: false,
        },
        validationSchema: yup.object({
            trems: yup.boolean()
                .required('Required')
                .oneOf([true], 'Check this box to continue'),
            privacy: yup.boolean()
                .required('Required')
                .oneOf([true], 'Check this box to continue'),
        }),
        onSubmit: values => {
            navigate("/create-account/enter-an-email");
        },
    });


    return (
        <div className='text-lg w-full max-w-[650px] mx-auto sm:px-10 py-10'>
            <Back />
            <h2 className='text-[32px] font-bold'>Terms of use</h2>
            <div className="flex flex-col gap-4 pt-5">
                <p>Step 1 of 4</p>
                <p>You must agree to the terms of use to create a JOBMQ account.</p>
                <p>The terms set out your responsibilities as a JOBMQ account holder and Services Australia's responsibilities as the service provider of JOBMQ.</p>
                <p>Services Australia collects, uses and discloses your personal information as set out in the JOBMQ privacy notice.</p>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className="py-5">
                    <div className="mb-6">
                        <div className="flex items-center">
                            <input
                                id="trems"
                                name="trems"
                                type="checkbox"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="trems" className="ml-2 text-base font-bold text-gray-900">I have read and agree to the terms of use.</label>
                        </div>
                        {formik.errors.trems && formik.touched.trems && <Warning message={formik.errors.trems} />}
                    </div>

                    <div className="mb-3">
                        <div className="flex items-center ">
                            <input
                                id="privacy"
                                name="privacy"
                                type="checkbox"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="privacy" className="ml-2 text-base font-bold text-gray-900">I have read and understand the privacy notice.</label>
                        </div>
                        {formik.errors.privacy && formik.touched.privacy && <Warning message={formik.errors.privacy} />}

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

export default TermsOfUse;

