import React, { useState } from 'react';

const EnterpriseUserPage: React.FC = () => {
  const [jobDescription, setJobDescription] = useState<string>("");

  const handleJobDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(e.target.value);
  };

  const handleAnalysis = () => {
    // Add your analysis logic here
    console.log(jobDescription);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="w-full max-w-lg p-8 space-y-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-white">Analyze a Job Description</h2>
        <p className="text-center text-white">Find the best candidates for your company</p>
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
            <label className="block text-sm font-medium text-white" htmlFor="job-description">
              Job Description
            </label>
            <textarea
              className="mt-1 block w-full bg-white bg-opacity-30 border border-gray-300 rounded-md shadow-sm py-2 px-3 text-white placeholder-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              id="job-description"
              rows={6}
              placeholder="We are looking for a..."
              onChange={handleJobDescriptionChange}
            ></textarea>
          </div>
          <div>
            <button
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              type="button"
              onClick={handleAnalysis}
            >
              Analyze
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnterpriseUserPage;