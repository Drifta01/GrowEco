'use client';

import Image from 'next/image';
import slots from '@/db/slots.json';
import Link from 'next/link';
import { SlotData } from '@/types/games';
import React from 'react';

export const Slots = () => {
  return (
    <div className="flex-grow bg-gray-200 py-8">
      <div className="container mx-auto px-0">
        <h1 className="text-lg font-semibold mb-8">Online Slots</h1>
        <div className="mx-8 grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-6">
          {slots.map((slot) => (
            <div
              key={slot.id || slot.name}
              className="flex flex-col h-3/4 bg-white rounded-lg hover:shadow-xl hover:shadow-slate-900 transition-shadow overflow-hidden"
            >
              <div className="flex-grow flex flex-col items-center">
                {/* Link wraps just the image */}
                <Link
                  href={slot.url || 'https://example.com'}
                  target={slot.targetBlank ? '_blank' : '_self'}
                  className="block w-full"
                >
                  <div className="flex justify-center items-center p-0 h-36">
                    <Image
                      src={slot.image || '/images/slots/placeholder.jpg'}
                      alt={slot.name || 'Slot game'}
                      width={120}
                      height={120}
                      className="object-contain  hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </Link>

                <div className="p-6 mb-12 text-center">
                  <h3 className="text-black font-bold px-0">{slot.name}</h3>
                  {slot.provider && (
                    <p className="hidden text-sm text-gray-600 mt-1">
                      by {slot.provider}
                    </p>
                  )}
                </div>
              </div>

              <div className="px-4 pb-4 mt-auto">
                <Link
                  href={slot.url || 'https://example.com'}
                  target={slot.targetBlank ? '_blank' : '_self'}
                  className=""
                ></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
