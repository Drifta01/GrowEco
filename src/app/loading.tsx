
import React from 'react';
import './globals.css';

const Loading = () => {
    return (
        
      
      <div className="flex justify-center items-center">
      
                <svg
                  className="animate-spin h-10 w-10 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    fill="light-green"
                    strokeWidth="4"
                    stroke="green"
                  />
                  <path
                    className="opacity-75 animate-pulse"
                    fill="green"
                    d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12zm2.5 0a5.5 5.5 0 1 0 11 0A5.5 5.5 0 0 0 6.5 12z"
                  />
                </svg>
            </div>
       
    );
};

export default Loading;
