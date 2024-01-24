import moment from 'moment';
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai'
import JobCardDropDown from './JobCardDropDown';
import { Link } from 'react-router-dom'

const JobCard = ({ doc, desingnation, id, description }) => {
    return (
        <div className='bg-white border flex flex-col gap-1 px-3 py-6 text-sm'>
            <div className="flex items-center justify-between">
                <p>{moment(new Date(doc)).fromNow()}</p>
                <div className="flex items-center">
                    <div className="rounded-full p-3 hover:bg-gray-200 transition_1">
                        <AiOutlineStar />
                    </div>
                    <JobCardDropDown jobId={id} />
                </div>
            </div>
            <div className="">
                <Link to={`/job/${id}`}>
                    <h3 className='text-lg text-primary-800 underline font-medium hover:no-underline'>{desingnation}</h3>
                </Link>
                <p className='text-[#4f4f4f]'>{"Artarmon, NSW"}</p>
                <p className='text-[#4f4f4f]'>{"Permanent position"}</p>
            </div>
            <div className="">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default JobCard;