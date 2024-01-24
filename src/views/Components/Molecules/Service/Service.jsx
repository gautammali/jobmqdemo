import React from 'react';

const Service = ({ item }) => {
    return (
        <div className='group/service shadow hover:bg-gray-100 bg-white hover:shadow-md border-[0.5px] hover:border-gray-600 transition_1 cursor-pointer'>
            {item?.img && <div className="">
                <img src={item?.img} alt="" />
            </div>}
            <div className="p-6 space-y-4">
                <h3 className='group-hover/service:no-underline underline text-blue-500 text-xl'>{item.title}</h3>
                <h4 className='text-gray-600 '>{item.desc}</h4>
            </div>
        </div>
    );
};

export default Service;