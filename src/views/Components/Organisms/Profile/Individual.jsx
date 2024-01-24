import React from 'react';
import AboutMe from '../../Molecules/Profiles/AboutMe';
import AdditionalDocuments from '../../Molecules/Profiles/AdditionalDocuments';
import Education from '../../Molecules/Profiles/Education';
import Experience from '../../Molecules/Profiles/Experience';
import Hero from '../../Molecules/Profiles/Hero';
import AppliedJobs from '../../Molecules/Profiles/JobPreferences/AppliedJobs';
import JobPreferences from '../../Molecules/Profiles/JobPreferences/JobPreferences';
import Referees from '../../Molecules/Profiles/Referees';

const Individual = () => {
    return (
        <div className=''>
            <Hero />
            <div className="bg-white">
                <div className="container grid grid-cols-6 gap-4 py-4">
                    <div className="col-span-6 md:col-span-4 flex flex-col gap-4">
                        <AboutMe />
                        <Experience />
                        <Education />
                        <AdditionalDocuments />
                        <Referees />
                    </div>
                    <div className="col-span-6 md:col-span-2 flex flex-col gap-4">
                        <JobPreferences />
                        <AppliedJobs />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Individual;