import React from 'react';
import { FiAlertOctagon } from 'react-icons/fi';

export default function TextError(props) {
    return (
        <span className='text-sm font-bold text-red-600 flex gap-2 mt-2 items-center capitalize'><FiAlertOctagon /> {props.children}</span>
    )
}
