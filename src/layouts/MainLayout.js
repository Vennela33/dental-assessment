import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;