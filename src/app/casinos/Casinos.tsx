/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';
import Image from 'next/image';
import casinos from '@/db/casinos.json'; // Assuming you have a JSON file with casino data
import Link from 'next/link';

export const Casinos = ({
  data = casinos, // Default to the imported casinos data if no data is passed
}) => {
  return (
    <div className="bg-gray-50 py-2">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8 text-center">
          {' '}
          Online Casinos
        </h1>
        <div className="mx-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {casinos.map((casinos) => (
            <div
              key={casinos.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="bg-white text-black text-center font-bold  rounded-lg">
                {casinos.name}
                <div className="p-4">
                  <div className="flex justify-center items-center h-24">
                    <Image
                      src={casinos.image}
                      alt={'image'}
                      width={100}
                      height={100}
                      className="object-contain h-full w-full"
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-4">
                  <button className="bg-gray-700 text-white hover:bg-gray-300 hover:text-black font-bold py-2 px-4 rounded mb-2">
                    <Link
                      href={casinos.url}
                      target={casinos.targetBlank ? '_blank' : '_self'}
                    >
                      Play Now
                    </Link>
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
