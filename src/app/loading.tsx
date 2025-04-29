'use client';

import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="relative">
        {/* Spinner */}
        <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-indigo-600 animate-spin"></div>
        
        {/* Loading text */}
        <div className="mt-4 text-center text-indigo-600 font-medium">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default Loading;

