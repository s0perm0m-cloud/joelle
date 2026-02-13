import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import IndividualUserPage from './pages/IndividualUserPage';
import EnterpriseUserPage from './pages/EnterpriseUserPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/individual" element={<IndividualUserPage />} />
        <Route path="/enterprise" element={<EnterpriseUserPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;