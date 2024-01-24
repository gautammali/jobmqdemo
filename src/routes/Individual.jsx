import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import { Main } from '../layouts';

const Individual = () => {
    const { accessToken, user } = useSelector((state) => state.auth)
    return accessToken && user?.userType === 1 ? <Outlet /> : <Navigate to={'/individuals/login'} />
};

export default Individual;