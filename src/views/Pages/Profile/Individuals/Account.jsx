/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AsideBar from '../../../Components/Organisms/Account/Individuals/AsideBar';

const Account = () => {
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (location.pathname === "/businesses/profile/account") {
            navigate("details")
        }
        return () => { }
    }, [])

    return (
        <div className='py-5'>
            <div className="container grid grid-cols-8 gap-4 px-4">
                <div className="col-span-2">
                    <AsideBar />
                </div>
                <div className="col-span-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Account;