'use client';
import React from 'react';
import Image from 'next/image';
import bonuses from '@/db/bonuses.json';
import Link from 'next/link';

export const Bonuses = (
  data = bonuses, // Default to the imported bonuses data if no data is passed
  bonus = bonuses, // Default to the imported bonuses data if no data is passed
) => {
  console.log(data);

  return (
    <div className="flex-grow bg-gray-50 py-8">
      <div className="container mx-auto px-0">
        <h1 className="text-lg font-semibold mb-8">Bonuses</h1>
        <div className="mx-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {bonus.map((bonus) => (
            <div
              key={bonus.id}
              className="flex flex-col h-full bg-white rounded-lg hover:shadow-xl hover:shadow-slate-900 transition-shadow"
            >
              <div>
                {bonus.bonus_type}
                <div className="p-4">
                  <div className="flex justify-center items-center p-4 h-24">
                    <Image
                      src={bonus.image}
                      alt={'bonuses.image'}
                      width={120}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="p-0 text-center flex-grow">
                <div className="font-semibold text-lg mb-2">
                  {bonus.deposit}
                </div>
                <div className="text-sm text-gray-600 text-center mt-2">
                  {bonus.expiryDate}
                </div>
              </div>
              <div>{bonus.casinoId}</div>
              <div className="flex justify-center mt-4">
                <button className="w-full bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition-colors">
                  <Link
                    href={bonus.url}
                    target={bonus.targetBlank ? '_blank' : '_self'}
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
