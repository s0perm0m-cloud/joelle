import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">About Human+</h1>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="relative">
            <img
              className="h-64 w-full object-cover"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our team"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-700 mb-6">
              At Human+, our mission is to empower individuals and organizations to thrive in the age of AI. We believe that technology should augment human potential, not replace it. Our platform is designed to provide personalized career guidance and help businesses build future-ready teams.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 mb-6">
              We envision a world where everyone has the opportunity to reach their full potential. By leveraging the power of AI, we can create a more equitable and prosperous future for all.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h3>
            <p className="text-lg text-gray-700">
              We are a passionate team of engineers, data scientists, and career experts dedicated to building a better future of work. We are committed to creating a platform that is not only powerful but also ethical and user-centric.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
