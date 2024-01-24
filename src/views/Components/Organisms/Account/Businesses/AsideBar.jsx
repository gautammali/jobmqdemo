import React from 'react';
import { NavLink } from 'react-router-dom';


const customRoutes = [
    {
        name: "Business details",
        route: "details"
    },
    {
        name: "Your provider and support",
        route: "provider"
    },
    {
        name: "Notifications",
        route: "notifications"
    },
    {
        name: "Privacy settings",
        route: "profile-visibility"
    },
    {
        name: "Settings",
        route: "settings"
    }
]
const AsideBar = () => {
    const active = "py-3 px-5 font-medium font-roboto text-lg h-[52px] text-white bg-site-bg-300"
    const inactive = "bg-site-bg-100 py-3 px-5 font-medium font-roboto text-lg h-[52px] text-site-text-200 "
    return (
        <div className='w-full border h-full bg-white border-site-border-400 '>
            <ul className='flex flex-col divide-y-2'>
                {customRoutes.map((item, id) => <NavLink key={id} className={({ isActive }) => isActive ? active : inactive} to={item.route}> <li>{item.name}</li></NavLink>)}
            </ul>
        </div>
    );
};

export default AsideBar;