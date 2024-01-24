import moment from 'moment';
import React, { useState } from 'react';
import { useGetProfileDetailsQuery } from '../../../../../../features/profile/profileApi';
import Modal from '../../../../Atoms/Modal/Modal';
import PersonalDetailsForm from './Forms/PersonalDetailsForm';
import { FaRegEdit } from 'react-icons/fa';

const BusinessDetails = () => {
    const [open, setOpen] = useState(false)
    const { data } = useGetProfileDetailsQuery()
    const { lastName, firstName, dob, jobSeekerId, email, contactNo, gender } = data?.data || {}

    return (
        <>
            <h1 className='text-2xl font-medium font-roboto text-site-text-200'>Businesses Details</h1>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse border border-site-border-300 ">
                    <thead className="text-xs uppercase bg-site-bg-300 text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3 border border-site-border-300">
                                Business Account ID
                            </th>
                            <th scope="col" className="px-6 py-3 border border-site-border-300">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 border border-site-border-300">
                                Full name
                            </th>
                            <th scope="col" className="px-6 py-3 border border-site-border-300">
                                Phone Number
                            </th>
                            <th scope="col" className="px-6 py-3 border border-site-border-300">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3 border border-site-border-300">
                                Date of Birth
                            </th>
                            <th scope="col" className="px-6 py-3 border border-site-border-300">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        <tr className="bg-[#f8f8f8] border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-[#E9E9E9]">
                                {(jobSeekerId === null && "-") || jobSeekerId}
                            </th>
                            <td className="px-6 py-4 border border-[#E9E9E9]">
                                {(email === null && "-") || email}
                            </td>
                            <td className="px-6 py-4 border border-[#E9E9E9]">
                                {firstName + " " + lastName}
                            </td>
                            <td className="px-6 py-4 border border-[#E9E9E9]">
                                {(contactNo === null && "-") || contactNo}
                            </td>
                            <td className="px-6 py-4 border border-[#E9E9E9]">
                                {
                                    (gender === null && "-") ||
                                    (gender === 1 && "Male") ||
                                    (gender === 2 && "Female") ||
                                    (gender === 3 && "Others")

                                }
                            </td>
                            <td className="px-6 py-4 border border-[#E9E9E9]">
                                {moment(dob).format("DD MMM  YYYY")}
                            </td>
                            <td className="px-6 py-4 border border-[#E9E9E9]">
                                <button onClick={() => setOpen(true)} className='bg-site-bg-300 cursor-pointer text-white text-xl p-2 rounded text-center' >
                                    <FaRegEdit />
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>




                <Modal open={open} setOpen={setOpen}>
                    <PersonalDetailsForm setOpen={setOpen} prevData={data?.data} />
                </Modal>


            </div>
        </>
    );
};

export default BusinessDetails;