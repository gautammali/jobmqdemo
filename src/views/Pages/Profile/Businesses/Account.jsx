/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AsideBar from '../../../Components/Organisms/Account/Businesses/AsideBar';
import { Helmet } from 'react-helmet-async';

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
        <>
        <Helmet>
            <title>Account | JOBMQ</title>
        </Helmet>
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
        </>
    );
};

export default Account;