import moment from 'moment';
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import JobCardDropDown from './JobCardDropDown';
export default function RecentJobCard({ doc, desingnation, id, expirationDate, minSalary, maxSalary }) {
    return (
        <div className='bg-white border border-site-border-300 hover:shadow-lg flex flex-col gap-1 py-3 px-4 text-sm transition_1 tracking-wider'>
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <p className='font-normal text-sm font-roboto text-site-text-200'>{moment(new Date(doc)).fromNow()}</p>
                    <Link to={`/businesses/jobs/${id}`}>
                        <h3 className='text-lg text-link-100 hover:underline font-medium font-roboto capitalize'>{desingnation}</h3>
                    </Link>
                </div>
                <div className="flex items-center">
                    <div className="rounded-full p-2 hover:bg-gray-200 transition_1">
                        <AiOutlineStar color='#a4a19b' />
                    </div>
                    <JobCardDropDown jobId={id} />
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <p className='font-normal font-roboto text-sm text-site-text-200'>Job Id: {id}</p>
                <p className='font-normal font-roboto text-sm text-site-text-200'>Posted on: {moment(new Date(doc)).format('DD MMM YYYY')}</p>
                <p className='font-normal font-roboto text-sm text-site-text-200'>Salary: {minSalary + " - " + maxSalary} {" AED"}</p>
                <p className='font-normal font-roboto text-sm text-site-text-200'>Expiring on: {moment(new Date(expirationDate)).format('DD MMM YYYY')}</p>
            </div>

        </div>
    );
};



