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
    <div className="bg-gray-100 text-gray-300">
      <section className="py-16 border-b border-gray-200 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-4"></h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto"></p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-600 text-4xl font-bold text-center mb-10">
            Recommended Casinos
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
            {casinos.slice(0, 5).map((casino) => (
              <div
                key={casino.id}
                className="bg-white   shadow-slate-900 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="relative h-24 w-24 mx-auto mt-6 mb-2">
                  <Image
                    src={casino.image || '/placeholder.jpg'}
                    alt={`${casino.name} logo`}
                    width={100}
                    height={150}
                    className="object-justify-center "
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

      {/* Keep your hover menu functionality if needed or modify as appropriate */}
      <div className="hidden">{/* Your existing hover menu code */}</div>
    </div>
  );
}
