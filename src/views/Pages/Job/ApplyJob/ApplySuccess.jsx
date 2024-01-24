import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';

const ApplySuccess = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="w-11/12 md:w-3/4 lg:w-1/2 bg-white rounded-lg shadow-md py-12 px-8 md:px-12 lg:px-16 flex flex-col items-center">
        <div className="mb-8">
          <BiCheckCircle className="w-24 h-24 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold text-center text-purple-900 mb-4">Congratulations!</h1>
        <p className="text-xl text-gray-700 text-center mb-8">Your application has been submitted successfully. Thank you for your interest in the position.</p>
        <a href="/" className="bg-purple-700 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-purple-800 transition-colors duration-300">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ApplySuccess;
