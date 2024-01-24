import React from 'react'
import JobDetails from '../../Components/Organisms/Job/Businesses/JobDetails'
import JobKeywords from '../../Components/Organisms/Job/Businesses/JobKeywords'

export default function PostJob() {
    return (
        <div className=''>
            <div className="bg-white">
                <div className="container grid grid-cols-6 gap-4 py-4">
                    <div className="col-span-6 md:col-span-4 flex flex-col gap-4">
                        <JobDetails />
                     
                    </div>
                    <div className="col-span-6 md:col-span-2">
                        <JobKeywords />
                    </div>
                </div>
            </div>
        </div>
    )
}
