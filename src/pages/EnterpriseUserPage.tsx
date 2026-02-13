import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import firebaseConfig from '../firebase';

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const EnterpriseUserPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);

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
        setShowDashboard(true);
      });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="w-full max-w-4xl p-8 space-y-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-white">Enterprise Login</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white" htmlFor="company-name">
              Company Name
            </label>
            <input
              className="mt-1 block w-full bg-white bg-opacity-30 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-white placeholder-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              id="company-name"
              type="text"
              placeholder="Your Company Inc."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white" htmlFor="company-id">
              Company ID
            </label>
            <input
              className="mt-1 block w-full bg-white bg-opacity-30 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-white placeholder-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              id="company-id"
              type="text"
              placeholder="Your Company ID"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white" htmlFor="password">
              Password
            </label>
            <input
              className="mt-1 block w-full bg-white bg-opacity-30 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-white placeholder-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
          <div>
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              type="button"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-6">
          <h3 className="text-2xl font-bold text-center text-white">Upload CVs</h3>
          <div className="mt-4">
            <label className="block text-sm font-medium text-white" htmlFor="cv">
              Upload CVs
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
          <div className="mt-4">
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              type="button"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        </div>

        {showDashboard && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-30 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Role Automation Potential</h3>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-red-200">
                    <div style={{ width: '20%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                  </div>
                </div>
                <p className="text-white">20% of roles can be automated.</p>
              </div>
              <div className="bg-white bg-opacity-30 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Role Augmentation Potential</h3>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-yellow-200">
                    <div style={{ width: '50%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
                  </div>
                </div>
                <p className="text-white">50% of roles can be augmented.</p>
              </div>
              <div className="bg-white bg-opacity-30 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Human-Centric Value-Add</h3>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-green-200">
                    <div style={{ width: '30%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                  </div>
                </div>
                <p className="text-white">30% of roles are uniquely human value-add.</p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-30 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Common Skillsets</h3>
                <ul className="list-disc list-inside text-white">
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="bg-white bg-opacity-30 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Recommended AI Tools</h3>
                <ul className="list-disc list-inside text-white">
                  <li>GitHub Copilot</li>
                  <li>Tabnine</li>
                  <li>Notion AI</li>
                  <li>ChatGPT</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-white bg-opacity-30 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Job Redesign Recommendations</h3>
              <p className="text-white">
                Based on the analysis, we recommend redesigning the roles of software developers to focus more on system design and architecture, while leveraging AI tools for code generation and testing. This will allow your developers to focus on higher-value tasks and increase their productivity.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnterpriseUserPage;