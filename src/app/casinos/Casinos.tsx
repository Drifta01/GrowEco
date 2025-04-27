'use client';

import React from 'react';
import Image from 'next/image';
import casinos from '@/data/casinos.json'; // Assuming you have a JSON file with casino data

export const Casinos = ({
 data = casinos, // Default to the imported casinos data if no data is passed
}) => {

 
   


  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">Online Casinos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casinos.map((casino) => (
            <div key={casino.name} className="bg-white rounded-lg shadow-md overflow-hidden">
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
          
                <div className="flex justify-center mt-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Play Now
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">T&Cs Apply</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

