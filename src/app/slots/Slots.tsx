'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import slots from '@/data/slots.json';
import Link from 'next/link';

export const Slots = () => {
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null);

  return (
    <div className="flex-grow bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">Online Slots</h1>
        <div className="mx-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {slots.map((slot) => (
            <div
              key={slot.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl relative"
              onMouseEnter={() => setHoveredSlot(slot.id)}
              onMouseLeave={() => setHoveredSlot(null)}
            >
              <div className="flex justify-center p-4">
                <Image
                  src={slot.image}
                  alt={slot.name}
                  width={120}
                  height={120}
                  className="object-contain h-32 w-32"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="font-bold text-lg mb-2">{slot.name}</h3>
                <div className="flex justify-center">
                  {[...Array(Math.floor(slot.rating))].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                  {slot.rating % 1 >= 0.5 && <span className="text-yellow-500">½</span>}
                </div>
              </div>

              <div className="mt-2 p-4 border-t border-gray-200">
                <button className="w-full bg-slate-600 text-white hover:bg-slate-700 font-bold py-2 px-4 rounded transition-colors">
                  <Link href={slot.url} target={slot.targetBlank ? '_blank' : '_self'} className="block w-full">
                    Play Now
                  </Link>
                </button>
              </div>

              {/* Hover Card */}
              {hoveredSlot === slot.id && slot.casinoInfo && (
                <div className="absolute inset-0 bg-white bg-opacity-95 p-4 flex flex-col justify-between transform transition-opacity duration-200 opacity-100 overflow-auto">
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-800">{slot.name}</h3>
                    
                    {/* Current Bonus */}
                    {slot.casinoInfo.currentBonus && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm text-slate-600 uppercase mb-1">Current Bonus</h4>
                        <div className="bg-green-50 border border-green-200 rounded p-2">
                          <p className="font-bold text-green-700">{slot.casinoInfo.currentBonus.title}</p>
                          <p className="text-sm text-green-600">{slot.casinoInfo.currentBonus.description}</p>
                          {slot.casinoInfo.currentBonus.expiryDate && (
                            <p className="text-xs text-green-500 mt-1">
                              Expires: {slot.casinoInfo.currentBonus.expiryDate}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Upcoming Events */}
                    {slot.casinoInfo.upcomingEvents && slot.casinoInfo.upcomingEvents.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm text-slate-600 uppercase mb-1">Upcoming Events</h4>
                        <ul className="space-y-2">
                          {slot.casinoInfo.upcomingEvents.map((event, idx) => (
                            <li key={idx} className="border-l-2 border-blue-400 pl-2">
                              <p className="font-medium text-slate-700">{event.title}</p>
                              <p className="text-xs text-slate-500">{event.date}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Casino Features */}
                    {slot.casinoInfo.features && slot.casinoInfo.features.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm text-slate-600 uppercase mb-1">Casino Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {slot.casinoInfo.features.map((feature, idx) => (
                            <span key={idx} className="inline-block bg-slate-100 text-slate-700 rounded-full px-2 py-1 text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <button className="w-full mt-4 bg-slate-600 text-white hover:bg-slate-700 font-bold py-2 px-4 rounded transition-colors">
                    <Link href={slot.url} target={slot.targetBlank ? '_blank' : '_self'} className="block w-full">
                      Claim Bonus Now
                    </Link>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

