import React from 'react';
import Callout from '../../Components/Organisms/Callout/Callout';
import Hero from '../../Components/Organisms/Hero/Hero';
import PopularServices from '../../Components/Organisms/PopularServices/PopularServices';
import { Helmet } from 'react-helmet-async';


const infoCallout = {
    title: "Are you an employer or business user?",
    desc: "Visit WorkforceAustralia.gov.au/businesses to find candidates, advertise job vacancies, promote your business, find support and more.",
    link: "jobmq.com/businesses",
    url: '/businesses'
}

const infoHero = {
    title: "Find your next job. Use our services.",
    desc: "Jobmq can search and apply for jobs or find more information on their pathway to employment.",
}


const Home = () => {
    return (
        <>
            <Helmet>
                <title> {"Job Portals"} | {"JOBMQ"} </title>
                <meta name="description" content={"JOBMQ is a jobportal for jobseekers and recruiters"}></meta>
            </Helmet>
            <main className='bg-[#F1F1F1]'>
                <Hero info={infoHero} />
                <PopularServices />
                <Callout info={infoCallout} />
            </main>
        </>
    );
};

export default Home;