import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  const headerClasses = isLandingPage
    ? 'bg-transparent text-white'
    : 'bg-white text-gray-800 shadow-md';

  return (
    <header className={`fixed top-0 left-0 right-0 z-20 p-4 flex justify-between items-center transition-colors duration-300 ${headerClasses}`}>
      <Link to="/" className="flex items-center space-x-2">
        <img src="https://cdn-icons-png.flaticon.com/512/10430/10430172.png" alt="Human+ Logo" className="h-8 w-8" />
        <span className="text-2xl font-bold">Human+</span>
      </Link>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/individual" className="hover:text-blue-500">For Individuals</Link>
        <Link to="/enterprise" className="hover:text-blue-500">For Enterprises</Link>
      </nav>
    </header>
  );
};

export default Header;