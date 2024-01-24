import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import Auth from '../layouts/Auth/Auth';

const Public = () => {
    const { accessToken } = useSelector((state) => state.auth)
    return accessToken ?  <Navigate to={'/'} /> : <Outlet /> 
};

export default Public;