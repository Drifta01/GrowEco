'use client';
import React from 'react';


const JackpotsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Jackpots</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Jackpot Item */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-center mt-2">Mega Jackpot</h3>
            <p className="text-gray-600 text-center">Current Amount: $1,000,000</p>
            <div className="flex justify-center mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Play Now
              </button>
            </div>
          </div>
        </div>
        {/* Add more jackpot items as needed */}
      </div>
    </div>

  );
};

export default JackpotsPage;
