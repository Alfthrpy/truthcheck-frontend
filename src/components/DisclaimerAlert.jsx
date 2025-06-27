// components/DisclaimerAlert.js

import React from 'react';
import { FiInfo } from 'react-icons/fi'; // Menggunakan ikon Info

const DisclaimerAlert = ({ children }) => {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-4 rounded-r-lg max-w-3xl mx-auto my-6" role="alert">
      <div className="flex items-center">
        <FiInfo className="flex-shrink-0 h-6 w-6 mr-3" />
        <div className="text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DisclaimerAlert;