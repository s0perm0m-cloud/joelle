import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import IndividualUserPage from './pages/IndividualUserPage';
import EnterpriseUserPage from './pages/EnterpriseUserPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AnalysisDashboardPage from './pages/AnalysisDashboardPage';
import CareerAdvisoryPage from './pages/CareerAdvisoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/individual" element={<IndividualUserPage />} />
        <Route path="/enterprise" element={<EnterpriseUserPage />} />
        <Route path="/analysis-dashboard" element={<AnalysisDashboardPage />} />
        <Route path="/career-advisory" element={<CareerAdvisoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
