import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-gray-400">Human+ is your personal AI-powered career advisor and workforce analytics platform.</p>
            <div className="flex items-center space-x-2 mt-4">
              <img src="https://cdn-icons-png.flaticon.com/512/10430/10430172.png" alt="Human+ Logo" className="h-10 w-10" />
              <span className="text-xl font-bold">Human+</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
              <Link to="/individual" className="hover:text-blue-500 transition-colors">For Individuals</Link>
              <Link to="/enterprise" className="hover:text-blue-500 transition-colors">For Enterprises</Link>
              <Link to="/about" className="hover:text-blue-500 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="h-8 w-8" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" className="h-8 w-8" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay up to date with the latest news and trends.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-800 text-gray-500">
          <p>&copy; {new Date().getFullYear()} Human+. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
