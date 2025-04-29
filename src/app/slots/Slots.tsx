'use client';

import React from 'react';
import Image from 'next/image';
import slots from '@/data/slots.json'; // Assuming you have a JSON file with casino data

export const Slots = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">Online Slots</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slots.map((slots) => (
            <div
              key={slots.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-4">
                <div className="flex justify-center items-center h-24">
                  <Image
                    src={'/luckyTwins.jpg'} // Assuming the first provider's image is used for all slots
                    alt={slots.name}
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

                <div className="mt-4 p-2 border-t border-gray-300">
                  <p className="text-sm text-gray-700">
                    Details about {slots.name}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
