import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src="https://cdn-icons-png.flaticon.com/512/10430/10430172.png" alt="Human+ Logo" className="h-8 w-8" />
            <span className="text-xl font-bold">Human+</span>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/individual" className="hover:text-blue-500">For Individuals</Link>
            <Link to="/enterprise" className="hover:text-blue-500">For Enterprises</Link>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-500">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-500">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-500">
          <p>&copy; 2024 Human+. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;