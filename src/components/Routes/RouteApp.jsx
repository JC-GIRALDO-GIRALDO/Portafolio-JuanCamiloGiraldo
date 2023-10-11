import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../Pages/Home/HomePage'));
const AboutMePage = lazy(() => import('../Pages/AboutMe/AboutMePage'));
const MyWorkPage = lazy(() => import('../Pages/ContactMe/MyWorkPage'));
const ServicesPage = lazy(() => import('../Pages/ContactMe/ServicesPage'));
const ContactMePage = lazy(() => import('../Pages/ContactMe/ContactMePage'));

function RouteApp() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AboutMePage' element={<AboutMePage />} />
        <Route path='/MyWorkPage' element={<MyWorkPage />} />
        <Route path='/ServicesPage' element={<ServicesPage />} />
        <Route path='/ContactMePage' element={<ContactMePage />} />
        <Route path='*' element="NoPage" />
      </Routes>
    </Suspense>
  );
}

export default RouteApp;
