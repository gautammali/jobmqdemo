import React, { useState } from 'react'
import Modal from '../../../Atoms/Modal/Modal'
import DeleteAccountForm from './Forms/DeleteAccountForm'

export default function DeleteAccount() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='p-8 border w-full flex flex-col space-y-4'>
                <h4 className='text-[#051532] font-medium text-2xl'>Delete account</h4>
                <p className='text-[#646464] font-normal'> Unlink this account from your JOBMQ</p>

                <div className="">
                    <Modal open={open} setOpen={setOpen}>
                        <DeleteAccountForm setOpen={setOpen} />
                    </Modal>
                    <button onClick={() => setOpen(true)} className='btn-delete py-[10px]'>Delete Account</button>
                </div>

            </div>
        </div>
    )
}
