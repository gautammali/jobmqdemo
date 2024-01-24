
import React, { useState } from 'react';
import { useGetProfileDetailsQuery } from '../../../../../features/profile/profileApi';
import Modal from '../../../Atoms/Modal/Modal';
import JobForm from './Forms/JobForm';




const JobDetails = () => {
    const [open, setOpen] = useState(false)
    const { data } = useGetProfileDetailsQuery()
    const { jobSeekerId } = data?.data || {}

    return (
        <div className='p-8 border w-full flex flex-col space-y-4'>
            <h2 className='text-2xl text-[#051532] mb-3'>Job Details</h2>
            <DisplayData name={"Job Id"} value={jobSeekerId} />
            <DisplayData name={"Desingnation"} value={jobSeekerId} />
            <DisplayData name={"Description"} value={jobSeekerId} />
            <DisplayData name={"Min Salary"} value={jobSeekerId} />
            <DisplayData name={"Max Salary"} value={jobSeekerId} />
            <DisplayData name={"Status"} value={jobSeekerId} />
            <DisplayData name={"ATS Redirection Link"} value={jobSeekerId} />

            <Modal open={open} setOpen={setOpen}>
                <JobForm setOpen={setOpen} prevData={data?.data} />
            </Modal>
            <div className="">
                <button onClick={() => setOpen(true)} className='btn-outline py-[10px]'>Edit</button>
            </div>

        </div>
    );
};

export default JobDetails;


const DisplayData = ({ name, value }) => {
    return (
        <div className="">
            <h6 className='text-[#646464] font-bold'>{name}</h6>
            <p className='text-[#646464] font-normal'>{(value === null && "-") || value}</p>
        </div>
    )
}