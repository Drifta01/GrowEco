'use client';

import React from 'react';
import Image from 'next/image';
import slots from '@/data/slots.json'; // Assuming you have a JSON file with casino data
import Link from 'next/link';

export const Slots = () => {
  return (
    <div className="flex-grow bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">Online Slots</h1>
        <div className="mx-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {slots.map((slots) => (
            <div
              key={slots.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="flex justify-center p-2">
                <Image
                  src={slots.image}
                  alt={'slots'}
                  width={100}
                  height={100}
                  className="object-fit h-24 w-24 "
                />
              </div>

              <div className="w-max h-10 mb-6 mx-auto">
                <button className="bg-gray-700 text-white hover:bg-gray-300 hover:text-black font-bold py-2 px-4 rounded mb-2">
                 
                  <Link href={slots.url} target={slots.targetBlank ? '_blank' : '_self'}>Play Now</Link>
                </button>
              </div>

              <div className="mt-4 p-2 border-t border-gray-300">
                <p className="text-sm text-gray-700">{slots.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
