import React from 'react';
import Navbar from '../Componets/Navbar';
import Footer from '../Componets/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div
        className='max-w-7xl mx-auto'
        >
          <Navbar></Navbar> 
          <Outlet></Outlet>
          <Footer></Footer> 
        </div>
    );
};

export default MainLayout;