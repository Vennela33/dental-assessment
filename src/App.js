import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* Optional: Add a 404 Not Found page */}
        <Route path="*" element={<div><h2>404 Not Found</h2><p>The page you are looking for does not exist.</p></div>} />
      </Route>
    </Routes>
  );
}

export default App;