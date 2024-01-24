import React, { useState } from 'react'
import Modal from '../../../Atoms/Modal/Modal'
import SecurityQuestionsForm from './Forms/SecurityQuestionsForm'

export default function SecurityQuestions() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='p-8 border w-full flex flex-col space-y-4'>
                <h4 className='text-[#051532] font-medium text-2xl'>Security questions</h4>
                <p className='text-[#646464] font-normal'> If you call us for support, we may ask you these questions to help confirm your identity.</p>
                <div className="">
                    <h6 className='text-[#646464] font-bold'> What is your town of birth?</h6>
                    <p className='text-[#646464] font-normal'>Challenge Question 1</p>
                </div>
                <div className="">
                    <h6 className='text-[#646464] font-bold'>Answer 1</h6>
                    <p className='text-[#646464] font-normal'>******************</p>
                </div>
                <div className="">
                    <h6 className='text-[#646464] font-bold'>Challenge Question 2</h6>
                    <p className='text-[#646464] font-normal'>What is your favourite colour?</p>
                </div>
                <div className="">
                    <h6 className='text-[#646464] font-bold'>Answer 2</h6>
                    <p className='text-[#646464] font-normal'>******************</p>
                </div>
              


                <Modal open={open} setOpen={setOpen}>
                    <SecurityQuestionsForm setOpen={setOpen} />
                </Modal>
                <div className="">
                    <button onClick={() => setOpen(true)} className='btn-outline py-[10px]'>Edit</button>
                </div>

            </div>
        </div>
    )
}
