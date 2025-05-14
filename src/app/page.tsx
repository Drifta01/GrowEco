'use client';
import Image from 'next/image';
import './globals.css';
import casinos from '@/db/casinos.json';
import Link from 'next/link';
import { useState } from 'react';

// Tab component to reduce repetition
const Tab = ({
  name,
  activeTab,
  setActiveTab,
}: {
  name: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => (
  <button
    onClick={() => setActiveTab(name.toLowerCase())}
    className={`px-8 py-3 text-center ${
      activeTab === name.toLowerCase() ? 'bg-white' : 'bg-gray-100'
    }`}
  >
    {name}
  </button>
);

export default function Home() {
  const [activeTab, setActiveTab] = useState('platforms');
  const newPlatforms = casinos.slice(0, 5); // Using the first 5 casinos for new platforms

  return (
    <main>
      {/* Casinos Section */}
      <section id="casinos" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-600 text-4xl font-bold text-center mb-10">
            Recommended Casinos
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
            {casinos.slice(0, 5).map((casino) => (
              <div
                key={casino.id}
                className="bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 text-center"
              >
                <div className="relative h-24 w-24 mx-auto mt-6 mb-2">
                  <Image
                    src={casino.image || '/placeholder.jpg'}
                    alt={`${casino.name} logo`}
                    width={100}
                    height={150}
                    className="object-justify-center"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.jpg';
                    }}
                  />
                </div>
                <h3 className="font-medium text-gray-800 mb-3 px-2 truncate">
                  {casino.name}
                </h3>
                <div className="px-4 pb-4">
                  <Link
                    href={casino.url || '#'}
                    target={casino.targetBlank ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition-colors font-medium"
                  >
                    Play
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Betting Section */}
      <section id="sports-betting" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-600 text-4xl font-bold text-center mb-10">
            Sports Betting
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Explore the best odds and betting options across multiple sports.
          </p>
          {/* Add sports betting content here */}
        </div>
      </section>

      {/* Slots and Bonuses Section */}
      <section id="slots-bonuses" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-600 text-4xl font-bold text-center mb-10">
            Slots & Bonuses
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Discover exciting slots and exclusive bonuses.
          </p>
          {/* Add slots and bonuses content here */}
        </div>
      </section>

      {/* Hottest Slots Section */}
      <section
        id="hottest-slots"
        className="py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            Hottest Slots Now Happening
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {casinos.slice(0, 5).map((casino) => (
              <div
                key={casino.id}
                className="bg-white text-gray-800 rounded-lg shadow-md p-4"
              >
                <Image
                  src={casino.image || '/placeholder.jpg'}
                  alt={casino.name}
                  width={100}
                  height={100}
                />
                <h3 className="font-bold mt-2">{casino.name}</h3>
                <p className="text-sm">Play now and win big!</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-600 text-4xl font-bold text-center mb-10">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-gray-600 italic">
                "This platform is amazing! I found the best casinos here."
              </p>
              <h4 className="mt-4 font-bold text-gray-800">- John Doe</h4>
            </div>
            {/* Add more testimonials */}
          </div>
        </div>
      </section>
    </main>
  );
}
