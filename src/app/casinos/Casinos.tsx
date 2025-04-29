/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';
import Image from 'next/image';
import casinos from '@/data/casinos.json'; // Assuming you have a JSON file with casino data
import Link from 'next/link';

export const Casinos = ({
  data = casinos, // Default to the imported casinos data if no data is passed
}) => {
  return (

    <div className="container py-6 bg-white">
      <div className="text-3xl text-center mb-4">Casinos</div>
      <div className="max-w-7xl mx-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {casinos.map((casino) => (
       <div key={casino.id} className="bg-gray-50 p-4 shadow-lg rounded-lg">
          
          <div className="bg-gray-300 text-black text-center font-bold py-2 px-2 rounded-lg">
              {casino.name}

              <div className="flex justify-center items-center h-34">
                <Image
                  src={casino.image}
                  alt={'image'}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            

            <div className="flex justify-center mt-4">
              <button className="bg-gray-700 text-white hover:bg-gray-300 hover:text-black font-bold py-2 px-4 rounded mb-2">
                <Link href={casino.url}>Play Now</Link>
              </button>
            </div>
          </div>
          </div>
        ))}
      </div>
      </div>


  );
};
