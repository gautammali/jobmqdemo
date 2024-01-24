import React from 'react';
import Callout from '../../Components/Organisms/Callout/Callout';
import Hero from '../../Components/Organisms/Hero/Hero';
import PopularServices from '../../Components/Organisms/PopularServices/PopularServices';
import WhatsNew from '../../Components/Organisms/WhatsNew/WhatsNew';
const infoCallout = {
    title: "Individual looking for a job?",
    desc: "Visit WorkforceAustralia.gov.au/individuals to find jobs, advice, coaching, etc.",
    link: "jobmq.com/individuals",
    url: '/individuals'
}
const infoHero = {
    title: "Recruit for your business",
    desc: "Find and hire staff using our free services.",
}




const Businesses = () => {
    return (
        <main className='bg-[#e1f4f4] pb-5'>
            <Hero info={infoHero} />
            <PopularServices />
            <WhatsNew />
            <Callout info={infoCallout} />
        </main>
    );
};

export default Businesses;