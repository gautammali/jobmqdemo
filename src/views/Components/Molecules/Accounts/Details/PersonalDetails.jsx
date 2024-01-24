import moment from 'moment';
import React, { useState } from 'react';
import { useGetProfileDetailsQuery } from '../../../../../features/profile/profileApi';
import Modal from '../../../Atoms/Modal/Modal';
import PersonalDetailsForm from './Forms/PersonalDetailsForm';

const PersonalDetails = () => {
    const [open, setOpen] = useState(false)
    const { data } = useGetProfileDetailsQuery()
    const { lastName, firstName, dob, jobSeekerId, email, contactNo, gender } = data?.data || {}

    return (
        <div className='p-8 border w-full flex flex-col space-y-4'>
            <h4 className='text-[#051532] font-semibold text-lg'>Personal details</h4>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Job Seeker ID</h6>
                <p className='text-[#646464] font-normal'>{(jobSeekerId === null && "-") || jobSeekerId}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Email</h6>
                <p className='text-[#646464] font-normal'>{(email === null && "-") || email}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Phone Number</h6>
                <p className='text-[#646464] font-normal'>{(contactNo === null && "-") || contactNo}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Full name</h6>
                <p className='text-[#646464] font-normal'>{firstName + " " + lastName}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Gender</h6>
                <p className='text-[#646464] font-normal'>{
                    (gender === null && "-") ||
                    (gender === 1 && "Male") ||
                    (gender === 2 && "Female") ||
                    (gender === 3 && "Others")

                }</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Date of Birth</h6>
                <p className='text-[#646464] font-normal'>{moment(dob).format("DD MMM  YYYY")}</p>
            </div>


            <Modal open={open} setOpen={setOpen}>
                <PersonalDetailsForm setOpen={setOpen} prevData={data?.data} />
            </Modal>
            <div className="">
                <button onClick={() => setOpen(true)} className='btn-outline py-[10px]'>Edit</button>
            </div>

        </div>
    );
};

export default PersonalDetails;