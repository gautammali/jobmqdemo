import React from 'react'
import AdditionalDocuments from '../../Molecules/Profiles/Businesses/AdditionalDocuments';
import AboutBusiness from '../../Molecules/Profiles/Businesses/AboutBusiness';
import RecentJobs from '../../Molecules/Profiles/Businesses/RecentJobs';
import Hero from '../../Molecules/Profiles/Businesses/Hero';
import Reports from '../../Molecules/Profiles/Businesses/Reports';

export default function Businesses() {
    return (
        <div className=''>
            <Hero />

            <Reports />
            <div className="bg-white">
       
                <div className="container grid grid-cols-6 gap-4 py-4">
                    <div className="col-span-6 md:col-span-4 flex flex-col gap-4">
                        <AboutBusiness />
                        <AdditionalDocuments />
                        {/* <Experience />
                        <Education />
                        <Referees /> */}
                    </div>
                    <div className="col-span-6 md:col-span-2">
                        <RecentJobs />
                    </div>
                </div>
            </div>
        </div>
    )
}
