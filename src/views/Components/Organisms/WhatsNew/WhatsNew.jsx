import React from 'react';
import Service from '../../Molecules/Service/Service';

const data = [
    {
        id: 1,
        title: "How to write a business profile",
        desc: "Find out how to attract job seekers with an informative business profile.",
    },
    {
        id: 2,
        title: "Hiring your next employee",
        desc: "Discover how Workforce Australia can help you with recruitment.",
    },
    {
        id: 3,
        title: "About Workforce Australia",
        desc: "Workforce Australia is a government employment service open to all Australian individuals and businesses.",
    }
]








const WhatsNew = () => {
    return (
        <div className='container py-8'>
        <h3 className='text-3xl font-medium mb-3'>Whats new</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {
                data.map((item) => <Service key={item.id} item={item} />)
            }
        </div>
    </div>
    );
};

export default WhatsNew;