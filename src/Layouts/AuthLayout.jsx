import React from 'react';
import Navbar from '../Componets/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componets/Footer';

const AuthLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
       
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;