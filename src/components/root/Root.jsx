import React from 'react';

import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div className=''>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;