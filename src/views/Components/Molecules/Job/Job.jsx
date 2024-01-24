import React from 'react';
import { AiOutlineStar } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
const Job = ({ time, title, location, type, desc }) => {
    return (
        <div className='bg-white border flex flex-col gap-4 px-3 py-6 text-sm'>
            <div className="flex items-center justify-between">
                <p>{time}</p>
                <div className="flex gap-3 items-center">
                    <AiOutlineStar />
                    <BsThreeDotsVertical />
                </div>
            </div>
            <div className="">
                <h3 className='text-lg text-primary-800 underline font-medium hover:no-underline'>{title}</h3>
                <p className='text-[#4f4f4f]'>{location}</p>
                <p className='text-[#4f4f4f]'>{type}</p>
            </div>
            <div className="">
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default Job;