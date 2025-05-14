'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import casinos from '@/db/casinos.json' assert { type: 'json' };
import Link from 'next/link';

type Casino = {
  id: number;
  casinoId: string;
  name: string;
  location: string;
  games: string[];
  rating: number;
  image: string;
  url: string;
  targetBlank: boolean;
  category: string;
  description: string;
  provider: string;
  promotions: { title: string; items: any[] };
  tournaments: { title: string; items: any[] };
};

export const Casinos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('Rating');
  const [selectedCasino, setSelectedCasino] = useState<Casino | any>(null);
  const casinosPerPage = 8;

  // Filter casinos based on search query and category
  const filteredCasinos = casinos
    .filter(
      (casino) =>
        casino.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (casino.provider &&
          casino.provider.toLowerCase().includes(searchQuery.toLowerCase())),
    )
    .filter(
      (casino) =>
        selectedCategory === 'All' || casino.category === selectedCategory,
    );

  // Sort casinos based on the selected option
  const sortedCasinos = [...filteredCasinos].sort((a, b) => {
    if (sortOption === 'Rating') return b.rating - a.rating;
    if (sortOption === 'Name') return a.name.localeCompare(b.name);
    return 0;
  });

  // Paginate casinos
  const paginatedCasinos = sortedCasinos.slice(
    (currentPage - 1) * casinosPerPage,
    currentPage * casinosPerPage,
  );

  return (
    <main>
      {/* Search and Filters Section */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-gray-600 text-4xl font-bold mb-4 sm:mb-0">
              Recommended Casinos
            </h1>
            <input
              type="text"
              placeholder="Search casinos by name or provider..."
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
              <option value="Top Rated">Top Rated</option>
              <option value="New">New Casinos</option>
              <option value="Popular">Popular</option>
            </select>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2"
            >
              <option value="Rating">Sort by Rating</option>
              <option value="Name">Sort by Name</option>
            </select>
          </div>
        </div>
      </section>

      {/* Casinos Section */}
      <section id="casinos" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-600 text-4xl font-bold text-center mb-10">
            Recommended Casinos
          </h2>
          {paginatedCasinos.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {paginatedCasinos.map((casino) => (
                <div
                  key={casino.id}
                  className="bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 text-center rounded-lg overflow-hidden"
                  onClick={() => setSelectedCasino(casino)}
                >
                  <div className="relative h-24 w-24 mx-auto mt-6 mb-2">
                    <Image
                      src={casino.image || '/placeholder.jpg'}
                      alt={`${casino.name} logo`}
                      width={100}
                      height={100}
                      className="object-contain"
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
                      Play Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">
              No casinos found matching your search.
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
                    Math.ceil(filteredCasinos.length / casinosPerPage),
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

      {/* Casino Details Modal */}
      {selectedCasino && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-3/4 lg:w-1/2">
            <h3 className="text-gray-800 text-2xl font-bold mb-4">
              {selectedCasino.name}
            </h3>
            <p className="text-gray-600 mb-4">{selectedCasino.description}</p>
            <p className="text-gray-600 mb-4">
              Rating: {selectedCasino.rating} | Category:{' '}
              {selectedCasino.category}
            </p>
            <button
              onClick={() => setSelectedCasino(null)}
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
