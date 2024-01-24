import React, { useState } from 'react';
import { useGetResumeQuery } from '../../../../../features/resume/resumeApi';
import Modal from '../../../Atoms/Modal/Modal';
import ResumeForm from './Forms/ResumeForm';

const Resume = () => {
    const [open, setOpen] = useState(false)
    const { data } = useGetResumeQuery()
    const { gender, minSalary, maxSalary } = data?.data || {}
    return (
        <div className='p-8 border w-full flex flex-col space-y-4'>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Min salary</h6>
                <p className='text-[#646464] font-normal'>{minSalary}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Max salary</h6>
                <p className='text-[#646464] font-normal'>{maxSalary}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Gender</h6>
                <p className='text-[#646464] font-normal'>{
                   ( gender === 1 && "Male") ||
                   ( gender === 2 && "Female") ||
                   ( gender === 3 && "Others")

                }</p>
            </div>
            <Modal open={open} setOpen={setOpen}>
                <ResumeForm setOpen={setOpen} prevData={data?.data} />
            </Modal>
            <div className="">
                <button onClick={() => setOpen(true)} className='btn-outline py-[10px]'>Edit</button>
            </div>
        </div>
    );
};

export default Resume;