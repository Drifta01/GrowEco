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
    <div className="flex-grow bg-gray-50 py-8">
      <div className="container mx-auto px-0">
        <h1 className="text-lg font-semibold mb-8"> Online Casinos</h1>
        <div className="mx-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {casinos.map((casinos) => (
            <div
              key={casinos.id}
              className="flex flex-col h-full bg-white rounded-lg hover:shadow-xl hover:shadow-slate-900 transition-shadow"
            >
              <div className="bg-white text-black text-center font-bold  rounded-lg">
                {casinos.name}

                <div className="flex justify-center items-center p-4 h-24">
                  <Image
                    src={casinos.image}
                    alt={'image'}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-0 p-0">
                <button className="w-full bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition-colors">
                  <Link
                    href={casinos.url}
                    target={casinos.targetBlank ? '_blank' : '_self'}
                    className="block w-full"
                  >
                    Play Now
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
