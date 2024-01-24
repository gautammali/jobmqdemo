import React, { useState } from 'react'
import Modal from '../../../Atoms/Modal/Modal'
import ProfileVisibilityForm from './ProfileVisibilityForm'

export default function ProfileVisibility() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='p-8 border w-full flex flex-col space-y-4'>
                <h4 className='text-[#051532] font-medium text-2xl'>Profile visibility</h4>
                <div className="">
                    <h6 className='text-[#646464] font-bold'>Standard</h6>
                    <p className='text-[#646464] font-normal'>Your profile is visible to businesses.</p>
                </div>
                
            

                <Modal open={open} setOpen={setOpen}>
                    <ProfileVisibilityForm setOpen={setOpen} />
                </Modal>
                <div className="">
                    <button onClick={() => setOpen(true)} className='btn-outline py-[10px]'>Edit</button>
                </div>

            </div>
        </div>
    )
}
