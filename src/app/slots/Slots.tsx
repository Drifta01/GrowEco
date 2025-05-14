'use client';

import Image from 'next/image';
import slots from '@/db/slots.json';
import Link from 'next/link';
import React, { useState } from 'react';

export const Slots = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('Popularity');
  const [selectedSlot, setSelectedSlot] = useState<(typeof slots)[0] | null>(
    null,
  );
  const slotsPerPage = 10;

  // Filter slots based on search query and category
  const filteredSlots = slots
    .filter(
      (slot) =>
        slot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (slot.provider &&
          slot.provider.toLowerCase().includes(searchQuery.toLowerCase())),
    )
    .filter(
      (slot) =>
        selectedCategory === 'All' || slot.category === selectedCategory,
    );

  // Sort slots based on the selected option
  const sortedSlots = [...filteredSlots].sort((a, b) => {
    if (sortOption === 'Popularity')
      return (b.popularity ?? 0) - (a.popularity ?? 0);
    if (sortOption === 'RTP') return (b.rtp ?? 0) - (a.rtp ?? 0);
    if (sortOption === 'Provider')
      return (a.provider ?? '').localeCompare(b.provider ?? '');
    return 0;
  });

  // Paginate slots
  const paginatedSlots = sortedSlots.slice(
    (currentPage - 1) * slotsPerPage,
    currentPage * slotsPerPage,
  );

  return (
    <main>
      {/* Search and Filters Section */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-gray-600 text-4xl font-bold mb-4 sm:mb-0">
              Slot Games
            </h1>
            <input
              type="text"
              placeholder="Search slots by name or provider..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-1/2"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 mb-4 sm:mb-0"
            >
              <option value="All">All Categories</option>
              <option value="Jackpot">Jackpot Slots</option>
              <option value="Free Spins">Free Spins</option>
              <option value="High RTP">High RTP</option>
            </select>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2"
            >
              <option value="Popularity">Sort by Popularity</option>
              <option value="RTP">Sort by RTP</option>
              <option value="Provider">Sort by Provider</option>
            </select>
          </div>
        </div>
      </section>

      {/* Slots Section */}
      <section id="slots" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-600 text-4xl font-bold text-center mb-10">
            Popular Slot Games
          </h2>
          {paginatedSlots.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {paginatedSlots.map((slot) => (
                <div
                  key={slot.id || slot.name}
                  className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
                  onClick={() => setSelectedSlot(slot)}
                >
                  <div className="flex-grow flex flex-col items-center">
                    <div className="flex justify-center items-center p-0 h-36">
                      <Image
                        src={slot.image || '/images/slots/placeholder.jpg'}
                        alt={slot.name || 'Slot game'}
                        width={120}
                        height={120}
                        className="object-contain hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-black font-bold">{slot.name}</h3>
                      {slot.provider && (
                        <p className="text-sm text-gray-600 mt-1">
                          by {slot.provider}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <Link
                      href={slot.url || 'https://example.com'}
                      target={slot.targetBlank ? '_blank' : '_self'}
                      className="block w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition-colors font-medium"
                    >
                      Play Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No slots found matching your search.
            </p>
          )}
          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-gray-200 rounded-l-md"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(
                    prev + 1,
                    Math.ceil(filteredSlots.length / slotsPerPage),
                  ),
                )
              }
              className="px-4 py-2 bg-gray-200 rounded-r-md"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Slot Details Modal */}
      {selectedSlot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-3/4 lg:w-1/2">
            <h3 className="text-gray-800 text-2xl font-bold mb-4">
              {selectedSlot.name}
            </h3>
            <p className="text-gray-600 mb-4">{selectedSlot.description}</p>
            <p className="text-gray-600 mb-4">
              RTP: {selectedSlot.rtp}% | Provider: {selectedSlot.provider}
            </p>
            <button
              onClick={() => setSelectedSlot(null)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
