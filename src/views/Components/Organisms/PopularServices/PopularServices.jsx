import React from 'react';
import serviceOne from '../../../../assets/services/01-Were-here-to-help-find-work.svg'
import Service from '../../Molecules/Service/Service';
const data = [
    {
        id: 1,
        title: "We're here to help you find work",
        desc: "Any Australian can use Workforce Australia to search and apply for jobs.",
        img: serviceOne
    },
    {
        id: 2,
        title: "Learn about obligations",
        desc: "Information about the tasks and activities you need to do to keep getting your income support payment.",
        img: serviceOne
    },
    {
        id: 3,
        title: "Find your local provider",
        desc: "People who can help you prepare for, find and keep a job.",
        img: serviceOne
    },
    {
        id: 4,
        title: "Find your local provider",
        desc: "People who can help you prepare for, find and keep a job.",
        img: serviceOne
    },
    {
        id: 5,
        title: "Learn about obligations",
        desc: "Information about the tasks and activities you need to do to keep getting your income support payment.",
        img: serviceOne
    },
    {
        id: 6,
        title: "We're here to help you find work",
        desc: "Any Australian can use Workforce Australia to search and apply for jobs.",
        img: serviceOne
    },
]

const PopularServices = () => {
    return (
        <div className='container pb-8 pt-20'>

            <h3 className='text-center font-semibold font-roboto text-[40px] leading-[100px] text-site-bg-300'>Popular Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    data.map((item) => <Service key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default PopularServices;





