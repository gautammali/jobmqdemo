import React from 'react';
import { FiAlertOctagon } from 'react-icons/fi';

const Warning = ({ message }) => {
    return (
        <span className='text-sm font-bold text-red-600 flex gap-2 mt-2 items-center capitalize'><FiAlertOctagon /> {message}</span>
    );
};

export default Warning;