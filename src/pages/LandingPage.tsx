import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-8">
          <h1 className="text-5xl font-bold mb-4 text-shadow">Welcome to Human+</h1>
          <p className="text-2xl mb-8 text-shadow">Your personal AI-powered career advisor.</p>
          <div className="flex space-x-4">
            <Link to="/individual" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              For Individuals
            </Link>
            <Link to="/enterprise" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
              For Enterprises
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;