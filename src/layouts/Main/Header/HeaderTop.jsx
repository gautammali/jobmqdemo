import React from 'react';
import { NavLink } from 'react-router-dom';

// import { NavLink } from 'react-router-dom';

const HeaderTop = () => {
    const active = 'bg-[#165dde] px-3 underline text-white font-light text-[14px] py-2 transition_1'
    const inactive = 'hover:bg-[#165dde] px-3 underline text-white font-light text-[14px] py-2 transition_1'
    return (
        <div className="bg-[#165dde] w-full pt-[3px]">
            <div className="bg-site-bg-300 ">
                <div className="container flex justify-end items-center">
                    <div className="flex gap-2">
                       

                        <NavLink to="/" 
                         className={({ isActive }) =>
                         isActive ? active : inactive}>Individuals</NavLink>
                        <NavLink to="/businesses" className={({ isActive }) =>
                         isActive ? active : inactive}
                         >Businesses </NavLink>
                       
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HeaderTop;