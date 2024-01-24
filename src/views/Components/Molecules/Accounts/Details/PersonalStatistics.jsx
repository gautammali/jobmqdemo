import React, { useState } from 'react'
import { useGetProfileDetailsQuery } from '../../../../../features/profile/profileApi';
import Modal from '../../../Atoms/Modal/Modal';
import PersonalStatisticsForm from './Forms/PersonalStatisticsForm';

export default function PersonalStatistics() {
    const [open, setOpen] = useState(false)
    const { data } = useGetProfileDetailsQuery()
    const { age, isMarried, yearofGraduation, currentSalary, expectedSalary, drivingLicense } = data?.data || {}
    return (
        <div className='p-8 border w-full flex flex-col space-y-4'>
            <h4 className='text-[#051532] font-semibold text-lg'>Personal Statistics</h4>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Age</h6>
                <p className='text-[#646464] font-normal'>{(age === null && "-") || age}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Martial Status</h6>
                <p className='text-[#646464] font-normal'>{isMarried ? "Married" : "Not Married"}
                </p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Year of Graduation</h6>
                <p className='text-[#646464] font-normal'>{(yearofGraduation === null && "-") || yearofGraduation}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Current Salary</h6>
                <p className='text-[#646464] font-normal'>{(currentSalary === null && "-") || currentSalary}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Expected Salary</h6>
                <p className='text-[#646464] font-normal'>{(expectedSalary === null && "-") || expectedSalary}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Do you have Driving License ?</h6>
                <p className='text-[#646464] font-normal'>{(drivingLicense ? "Yes" : "No")}</p>
            </div>



            <Modal open={open} setOpen={setOpen}>
                <PersonalStatisticsForm setOpen={setOpen} prevData={data?.data} />
            </Modal>
            <div className="">
                <button onClick={() => setOpen(true)} className='btn-outline py-[10px]'>Edit</button>
            </div>

        </div>
    );
};