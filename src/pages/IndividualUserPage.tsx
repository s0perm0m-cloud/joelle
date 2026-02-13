import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import firebaseConfig from '../firebase';

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const IndividualUserPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = ref(storage, `cvs/${file.name}`);
      uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="w-full max-w-lg p-8 space-y-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-white">Analyze your CV</h2>
        <p className="text-center text-white">Get insights into your career path</p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white" htmlFor="email">
                Email Address
              </label>
              <input
                className="mt-1 block w-full bg-white bg-opacity-30 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-white placeholder-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white" htmlFor="phone">
                Contact Number
              </label>
              <input
                className="mt-1 block w-full bg-white bg-opacity-30 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-white placeholder-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                id="phone"
                type="text"
                placeholder="+1 (555) 555-5555"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white" htmlFor="cv">
              Upload CV
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-300">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white bg-opacity-30 rounded-md font-medium text-blue-500 hover:text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-400">PDF, DOCX up to 10MB</p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              type="button"
              onClick={handleUpload}
            >
              Analyze
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IndividualUserPage;