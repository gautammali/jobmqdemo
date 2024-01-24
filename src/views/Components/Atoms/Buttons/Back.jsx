import React from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Back = () => {
    return (
        <Link to={-1}><div className="flex gap-2 items-center mb-3"> <IoChevronBackOutline className='text-sm' /> <span className=' underline text-blue-800 text-sm'>Back</span></div></Link>
    );
};

export default Back;