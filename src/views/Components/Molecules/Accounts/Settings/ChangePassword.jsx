import React, { useState } from 'react'
import Modal from '../../../Atoms/Modal/Modal'
import ChangePasswordForm from './Forms/ChangePasswordForm'

export default function ChangePassword() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='p-8 border w-full flex flex-col space-y-4'>
                <h4 className='text-[#051532] font-medium text-2xl'>Change your password</h4>
                <p className='text-[#646464] font-normal'>Unlink this account from your JOBMQ</p>


                <Modal open={open} setOpen={setOpen}>
                    <ChangePasswordForm setOpen={setOpen} />
                </Modal>
                <div className="">
                    <button onClick={() => setOpen(true)} className='btn-outline py-[10px]'>Change</button>
                </div>
            </div>
        </div>
    )
}
