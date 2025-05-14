import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{ backgroundImage: "url('/pinky.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Slots Direct</h1>
            <p className="text-lg mb-6">
              Discover the best casinos, sports betting, and slots all in one
              place.
            </p>
            <a
              href="#casinos"
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
            >
              Explore Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
