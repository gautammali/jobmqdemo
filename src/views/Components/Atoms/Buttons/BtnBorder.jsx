import React from 'react';

const BtnBorder = ({ onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className='hover:bg-[#254a7e] hover:text-white transition_1 text-lg bg-none border-2 border-black rounded px-8 py-3'
        >
            {children}
        </button>
    );
};

export default BtnBorder;