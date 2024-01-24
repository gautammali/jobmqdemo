import React from 'react';
import { NavLink } from 'react-router-dom';
import Job from '../../Molecules/Job/Job';

const jobs = [
    {
        id: 1,
        time: "Added 22 days ago",
        title: "Project Coordinator",
        location: "Artarmon, NSW",
        type: "Permanent position",
        desc: "The Missing Link has been operating in Australia for over 25 years, helping businesses achieve their goals through IT transformation with our core offerings; IT & Cloud, Cyber Security and Automation.Today, The Missing Link is one of the most awarded IT companies in Australia – recognised mainly for our people and processes.With over 150 + staff and 25 + different countries represented in our business, we’ve cultivated a respectful and positive workplace where everyone feels valued, respected and empowered.We pride",
    },
    {
        id: 2,
        time: "Added 22 days ago",
        title: "Project Coordinator",
        location: "Artarmon, NSW",
        type: "Permanent position",
        desc: "The Missing Link has been operating in Australia for over 25 years, helping businesses achieve their goals through IT transformation with our core offerings; IT & Cloud, Cyber Security and Automation.Today, The Missing Link is one of the most awarded IT companies in Australia – recognised mainly for our people and processes.With over 150 + staff and 25 + different countries represented in our business, we’ve cultivated a respectful and positive workplace where everyone feels valued, respected and empowered.We pride",
    },
    {
        id: 3,
        time: "Added 22 days ago",
        title: "Project Coordinator",
        location: "Artarmon, NSW",
        type: "Permanent position",
        desc: "The Missing Link has been operating in Australia for over 25 years, helping businesses achieve their goals through IT transformation with our core offerings; IT & Cloud, Cyber Security and Automation.Today, The Missing Link is one of the most awarded IT companies in Australia – recognised mainly for our people and processes.With over 150 + staff and 25 + different countries represented in our business, we’ve cultivated a respectful and positive workplace where everyone feels valued, respected and empowered.We pride",
    },
]


const RecommendedJobs = () => {
    return (
        <div className='container mt-12'>
            <h3 className='text-[28px] font-medium mb-3' >Recommended jobs</h3>
            <p className='text-[#4f4f4f]'>To get better job recommendations, please update your
                <NavLink className={"text-primary-800 underline px-1"} to={"/individuals/profile"}>profile</NavLink> and your
                <NavLink className={"text-primary-800 underline px-1"} to={"/individuals/profile"}>job preferences</NavLink>.</p>

            <div className="flex flex-col gap-4 py-5">
                {
                    jobs.map((item) => <Job key={item.id} {...item} />)
                }

            </div>
        </div>
    );
};

export default RecommendedJobs;