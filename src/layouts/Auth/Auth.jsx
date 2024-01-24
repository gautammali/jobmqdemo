import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../Main/Footer/Footer';
import Header from './Header';

const Auth = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Auth;