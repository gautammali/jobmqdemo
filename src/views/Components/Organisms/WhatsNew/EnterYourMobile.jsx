// import React, { useEffect } from 'react';
// import * as yup from 'yup';
// import { useFormik } from 'formik'
// import { NavLink, useNavigate } from 'react-router-dom';
// import Back from '../../Atoms/Buttons/Back';
// import Cancle from '../../Atoms/Buttons/Cancle';
// import Warning from '../../Atoms/Alert/Warning';
// import { useUpdatePhoneNumberMutation } from '../../../../features/auth/registerApi';
// import { useSelector } from 'react-redux';
// import Loading from '../../Atoms/Alert/Loading';


// const EnterYourMobile = () => {

//     const { email } = useSelector((state) => state.register)
//     const auth = JSON.parse(localStorage.getItem('auth'))
//     const navigate = useNavigate()
//     const [updatePhoneNumber, { data, isLoading }] = useUpdatePhoneNumberMutation()
    
//     const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    
//     const formik = useFormik({
//         initialValues: {
//             phone: '',
//         },
//         validationSchema: yup.object({
//             phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')
//         }),
//         onSubmit: values => {
//             updatePhoneNumber({
//                 ...values,
//                 email: email || auth.email
//             })
//         },
//     });

//     useEffect(() => {
//         if (data?.isSuccess) {
//             navigate("/create-account/create-password");
//         }

//         return () => { }
//     }, [data, navigate])


//     return (
//         <div className='text-lg w-full max-w-[650px] mx-auto sm:px-10 py-10'>
//             {isLoading && <Loading />}
//             <Back />
//             <h2 className='text-[32px] font-bold'>Enter your mobile</h2>
//             <div className="flex flex-col gap-4 pt-5">
//                 <p>Step 3 of 5</p>
//                 <p>JobMq will send you a one-time use code  an email to this address if you receive a message in your JOBMQ inbox.</p>
//                 <p>if you can't use mobile number <NavLink to="/create-account/create-password" className={"text-blue-800 underline"} >Skip this step</NavLink></p>
//             </div>

//             <form onSubmit={formik.handleSubmit}>
//                 <div className="py-5">
//                     <div className="">
//                         <div className="">
//                             <label htmlFor="mobile" className="block mb-2 text-base font-bold text-gray-900">Mobile number</label>
//                             <input
//                                 id="phone"
//                                 name="phone"
//                                 type="text"
//                                 onChange={formik.handleChange}
//                                 value={formik.values.phone}
//                                 required
//                                 className="bg-gray-50 border border-gray-600 text-gray-900 text-base font-normal focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                             />
//                         </div>
//                         {formik.errors.phone && <Warning message={formik.errors.phone} />}
//                     </div>

//                 </div>


//                 <div className=" flex gap-3 items-center">
//                     <button
//                         type="submit"
//                         className="btn-sky px-20 py-[10px] text-base font-semibold">Next</button>
//                     <Cancle />
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default EnterYourMobile;