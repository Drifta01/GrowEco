'use client';
import React from 'react';
import Image from 'next/image';
import bonuses from '@/db/bonuses.json';
import Link from 'next/link';

export const Bonuses = () => {
  return (
    <main>
      {/* Bonuses Section */}
      <section id="bonuses" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-600 text-4xl font-bold text-center mb-10">
            Recommended Bonuses
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {bonuses.map((bonus) => (
              <div
                key={bonus.id}
                className="bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 text-center rounded-lg overflow-hidden"
              >
                <div className="relative h-24 w-24 mx-auto mt-6 mb-2">
                  <Image
                    src={bonus.image || '/placeholder.jpg'}
                    alt={`${bonus.bonus_type} bonus`}
                    width={100}
                    height={100}
                    className="object-contain"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.jpg';
                    }}
                  />
                </div>
                <h3 className="font-medium text-gray-800 mb-3 px-2 truncate">
                  {bonus.bonus_type}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{bonus.deposit}</p>
                <p className="text-sm text-gray-600 mb-4">
                  Expires: {bonus.expiryDate}
                </p>
                <div className="px-4 pb-4">
                  <Link
                    href={bonus.url || '#'}
                    target={bonus.targetBlank ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition-colors font-medium"
                  >
                    Claim Bonus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bonuses Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-600 text-4xl font-bold text-center mb-10">
            Featured Bonuses
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Check out our top-rated bonuses for the best rewards.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {bonuses.slice(0, 4).map((bonus) => (
              <div
                key={bonus.id}
                className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 p-4"
              >
                <Image
                  src={bonus.image || '/placeholder.jpg'}
                  alt={bonus.bonus_type || 'Bonus'}
                  width={100}
                  height={100}
                  className="object-contain mx-auto"
                />
                <h3 className="text-center text-black font-bold mt-4">
                  {bonus.bonus_type}
                </h3>
                <p className="text-center text-sm text-gray-600 mt-2">
                  {bonus.deposit}
                </p>
                <Link
                  href={bonus.url || '#'}
                  target={bonus.targetBlank ? '_blank' : '_self'}
                  className="block mt-4 bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition-colors font-medium"
                >
                  Claim Bonus
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-600 text-4xl font-bold text-center mb-10">
            What Players Are Saying
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-gray-600 italic">
                "The bonuses here are amazing! I got a great deal on my first
                deposit."
              </p>
              <h4 className="mt-4 font-bold text-gray-800">- John D.</h4>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-gray-600 italic">
                "I love the variety of bonuses available. Highly recommend!"
              </p>
              <h4 className="mt-4 font-bold text-gray-800">- Sarah W.</h4>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-gray-600 italic">
                "The promotions here are top-notch. Great experience!"
              </p>
              <h4 className="mt-4 font-bold text-gray-800">- Emily R.</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
