'use client';
import React from 'react';
import Image from 'next/image';
import './globals.css';

const recommendedCasinos = [
  {
    id: 1,
    name: 'Wildz',
    logoSrc: '/21681.jpg',
    rating: 4.7,
  },
  {
    id: 2,
    name: 'Jackpot City',
    logoSrc: '/pinky.png',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Bcasino',
    logoSrc: '/2029.jpg',
    rating: 4.3,
  },
  {
    id: 3,
    name: 'Bcasino',
    logoSrc: '/48991.jpg',
    rating: 4.3,
  },
  {
    id: 3,
    name: 'Bcasino',
    logoSrc: '/49002.jpg',
    rating: 4.3,
  },
  {
    id: 3,
    name: 'Bcasino',
    logoSrc: '/49012.jpg',
    rating: 4.3,
  },
];





const Home = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search casinos..."
            className="w-full p-0 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Recommended by our experts</h2>
          <div className="flex -flex-auto gap-4 overflow-x-auto">
            {recommendedCasinos.map((casino) => (
              <div
                key={casino.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex justify-center items-center h-14">
                    <Image
                      src={casino.logoSrc}
                      alt={casino.name}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center mt-2">{casino.name}</h3>
                  <div className="flex justify-center mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Play
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2">T&Cs Apply</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      
      </div>
    </div>
  );
};
export default Home;

