import React from 'react';
import Hero from '../../../Components/Organisms/Hero/Hero';
import RecommendedJobs from '../../../Components/Organisms/RecommendedJobs/RecommendedJobs';

const Businesses = () => {
    const info = {
        title: "Hi, MD Azadur",
        desc: "Last login Wed, 23 Nov 2022 12:01 am"
    }
    return (
        <div className='bg-[#E1f4f4]'>
            <Hero info={info} />
            <RecommendedJobs />
        </div>
    );
};

export default Businesses;