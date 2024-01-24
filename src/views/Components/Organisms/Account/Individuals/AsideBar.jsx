import React from 'react';
import { NavLink } from 'react-router-dom';

const AsideBar = () => {
    const active = "bg-[#f4f4f4] py-[16px] px-[20px] font-bold rounded-md"
    const inactive = "px-[20px] py-[16px] hover:bg-[#f4f4f4] rounded-md"
    return (
        <div className='w-full'>
            <ul className='flex flex-col gap-1'>
                <NavLink className={({ isActive }) => isActive ? active : inactive} to={"details"}> <li>Your details</li></NavLink>

                <NavLink className={({ isActive }) => isActive ? active : inactive} to="provider"> <li>Your provider and support</li></NavLink>
                <NavLink className={({ isActive }) => isActive ? active : inactive} to="identity-referees"> <li>Identity and referees (Optional)</li></NavLink>
                <NavLink className={({ isActive }) => isActive ? active : inactive} to="notifications"> <li>Notifications</li></NavLink>
                <NavLink className={({ isActive }) => isActive ? active : inactive} to="profile-visibility"> <li>Privacy settings</li></NavLink>
                <NavLink className={({ isActive }) => isActive ? active : inactive} to="settings"> <li>Settings</li></NavLink>
            </ul>

        </div>
    );
};

export default AsideBar;