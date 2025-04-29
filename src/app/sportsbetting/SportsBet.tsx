'use client';

import React from 'react';
import Image from 'next/image';
import sportsbetting from '@/data/sportsbetting.json'; // Assuming you have a JSON file with casino data

export const SportsBet = ({
  data = sportsbetting, // Default to the imported casinos data if no data is passed
}) => {
  console.log(data);
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">Sports Betting</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportsbetting.sportsbetting.map((sportsbetting) => (
            <div
              key={sportsbetting.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4">
                <div className="flex justify-center items-center h-24">
                  <Image
                    src={'/pinky.png'}
                    alt={'cainos.image'}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold text-center mt-4">
                  {sportsbetting.id}
                </h2>
                <p className="text-gray-600 text-center mt-2">
                  {sportsbetting.name}
                </p>
                <div className="flex justify-center mt-4">
                  <span className="text-lg font-bold text-gray-500">
                    {sportsbetting.leagues.map((league) => (
                      <span key={league.id} className="text-sm text-gray-600">
                        {league.name}
                      </span>
                    ))}
                  </span>
                </div>

                <div className="flex justify-center mt-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Bet Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
