import moment from 'moment';
import React, { useState } from 'react'
import { useGetProfileDetailsQuery } from '../../../../../features/profile/profileApi';
import Modal from '../../../Atoms/Modal/Modal';
import IdentityRefereesForm from './IdentityRefereesForm';

export default function IdentityReferees() {
    const [open, setOpen] = useState(false)
    const { data } = useGetProfileDetailsQuery()
    const { passportNo, passportIssueDate, passportExpiryDate, sponserName, localIDNo, visaStatus, haveFamilyBook } = data?.data || {}

    return (
        <div className='p-8 border w-full flex flex-col space-y-4'>
            <h4 className='text-[#051532] font-semibold text-lg'>Identity References (Optional)</h4>
            <p>You can share details of your identity references to have more authentic & waittage of your profile. We will not validate any of the following references information provided by you. You Identity reference details can shared with employer to whome you have applied the JOB Application.</p>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Passport Number</h6>
                <p className='text-[#646464] font-normal'>{(passportNo === null && "-") || passportNo}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Passport Issue Date</h6>
                <p className='text-[#646464] font-normal'>{(passportIssueDate === null && "-") || moment(passportIssueDate).format("DD MMM  YYYY")}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Passport Expiry Date</h6>
                <p className='text-[#646464] font-normal'>{(passportExpiryDate === null && "-") || moment(passportExpiryDate).format("DD MMM  YYYY")}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Current Employer Name</h6>
                <p className='text-[#646464] font-normal'>{(sponserName === null && "-") || sponserName}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>National ID Number</h6>
                <p className='text-[#646464] font-normal'>{(localIDNo === null && "-") || localIDNo}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Visa Status</h6>
                <p className='text-[#646464] font-normal'>{(visaStatus === null && "-") || visaStatus}</p>
            </div>
            <div className="">
                <h6 className='text-[#646464] font-bold'>Do you have Family Book ?</h6>
                <p className='text-[#646464] font-normal'>{
                    (haveFamilyBook === null && "-") || haveFamilyBook === "1" ? "Yes" : "No"
                }</p>
            </div>



            <Modal open={open} setOpen={setOpen}>
                <IdentityRefereesForm setOpen={setOpen} prevData={data?.data} />
            </Modal>
            <div className="">
                <button onClick={() => setOpen(true)} className='btn-outline py-[10px]'>Edit</button>
            </div>

        </div>
    );
};