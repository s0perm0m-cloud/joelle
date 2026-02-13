import React from 'react';

const AnalysisDashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Analysis Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Automation Potential</h2>
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: '40%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
            <p className="text-gray-600">40% of your tasks can be automated.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Augmentation Potential</h2>
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-green-200">
                <div style={{ width: '60%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
              </div>
            </div>
            <p className="text-gray-600">60% of your tasks can be augmented with AI.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Human-Centric Skills</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Creativity</li>
              <li>Critical Thinking</li>
              <li>Emotional Intelligence</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisDashboardPage;
