import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const PageContainer = () => {
    return (
        <div className='all-content'>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default PageContainer;