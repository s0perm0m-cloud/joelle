import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const isLandingPage = path === '/';
  const isIndividualFlow = path === '/individual' || path === '/analysis-dashboard' || path === '/career-advisory';

  const headerClasses = isLandingPage
    ? 'bg-transparent text-white'
    : 'bg-white text-gray-800 shadow-lg';

  const linkColor = isLandingPage ? 'text-white' : 'text-gray-800';

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 p-4 flex justify-between items-center transition-all duration-300 ${headerClasses}`}>
      <Link to="/" className="flex items-center space-x-2">
        <img src="https://cdn-icons-png.flaticon.com/512/10430/10430172.png" alt="Human+ Logo" className="h-10 w-10" />
        <span className={`text-2xl font-bold ${linkColor}`}>Human+</span>
      </Link>
      <nav className="space-x-6 flex items-center">
        <Link to="/" className={`${linkColor} hover:text-blue-500 transition-colors`}>Home</Link>
        <Link to="/individual" className={`${linkColor} hover:text-blue-500 transition-colors`}>For Individuals</Link>
        <Link to="/enterprise" className={`${linkColor} hover:text-blue-500 transition-colors`}>For Enterprises</Link>
        {isIndividualFlow && (
          <>
            <span className="text-gray-400">|</span>
            <Link to="/analysis-dashboard" className={`${linkColor} hover:text-blue-500 transition-colors`}>Dashboard</Link>
            <Link to="/career-advisory" className={`${linkColor} hover:text-blue-500 transition-colors`}>Advisory</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
