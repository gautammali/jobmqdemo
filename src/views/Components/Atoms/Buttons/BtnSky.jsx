import React from 'react';

const BtnSky = ({ onClick, children,className }) => {
    return (
        <button
            onClick={onClick}
            className={`hover:bg-[#254a7e] hover:text-white transition_1 text-lg bg-[#99e1f3] rounded px-8 py-3 border-2 border-[#99e1f3] ${className}`}
        >
            {children}
        </button>
    );
};

export default BtnSky;