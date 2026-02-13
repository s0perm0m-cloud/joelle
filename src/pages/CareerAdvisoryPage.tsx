import React from 'react';

const CareerAdvisoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Career Advisory Report</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Role Enhancement with AI</h2>
          <p className="text-gray-600 mb-4">
            Your role as a software developer can be significantly enhanced with the use of AI tools. Here are some recommendations:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>
              **AI-Powered Code Completion:** Tools like GitHub Copilot and Tabnine can help you write code faster and with fewer errors.
            </li>
            <li>
              **Automated Testing:** AI-powered testing tools can help you generate test cases and identify bugs more efficiently.
            </li>
            <li>
              **Intelligent Debugging:** AI can help you identify the root cause of bugs and suggest solutions.
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Upskilling Recommendations</h2>
          <p className="text-gray-600 mb-4">
            To increase your employability and stay ahead of the curve, we recommend the following upskilling paths:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>
              **Master Machine Learning:** Gain a deep understanding of machine learning algorithms and their applications.
            </li>
            <li>
              **Learn Cloud Computing:** Become proficient in cloud platforms like AWS, Azure, or Google Cloud.
            </li>
            <li>
              **Develop Soft Skills:** Enhance your communication, collaboration, and problem-solving skills.
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Personality Test Results</h2>
          <p className="text-gray-600">
            Your personality test results indicate that you are a highly analytical and detail-oriented individual. These traits make you well-suited for roles that require a high degree of precision and problem-solving skills, such as software engineering, data science, and financial analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvisoryPage;
