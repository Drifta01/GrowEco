'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import slots from '@/db/slots.json';
import Link from 'next/link';

export const Slots = () => {
  return (
    <div className="flex-grow bg-gray-50 py-8">
      <div className="container mx-auto px-0">
        <h1 className="text-lg font-semibold mb-8">Online Slots</h1>
        <div className="mx-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {slots.map((slots) => (
            <div
              key={slots.id}
              className="flex flex-col h-full bg-white rounded-lg hover:shadow-xl hover:shadow-slate-900 transition-shadow"
            >
              <div className="flex justify-center items-center p-4 h-24">
                <Image
                  src={slots.image}
                  alt={slots.name}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              <div className="p-0 text-center flex-grow">
                <h3 className="font-semibold text-lg mb-2">{slots.name}</h3>
              </div>

              <div className="mt-0 p-0">
                <Link
                  href={slots.url}
                  target={slots.targetBlank ? '_blank' : '_self'}
                  className="block w-full"
                >
                  <button className="w-full bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition-colors">
                    Play Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
