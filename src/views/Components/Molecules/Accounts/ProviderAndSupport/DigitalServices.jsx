import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'

export default function DigitalServices() {
    return (
        <div className="p-8 border w-full">
            <h6 className='font-semibold text-[#4f4f4f] text-[22px]'>Digital Services Contact Centre</h6>
            <p className='py-2 text-[#6a6a6a]'>For job seekers managing their own employment services in JOBMQ Online for Individuals.</p>
            <a className='flex gap-2 items-center' href="mailto:ebot@jobmq.com">
                <AiOutlineMail />
                <span className='u underline text-sky-700 hover:no-underline'>ebot@jobmq.com</span>
            </a>
       
        </div>
    )
}
