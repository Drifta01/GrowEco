'use client';
import React from 'react';
import Link from 'next/link';

interface SpecialOffer {
  id: number;
  title: string;
  amount: string;
  description: string;
}

export const LeftSidebar = () => {
  const specialOffers: SpecialOffer[] = [
    { id: 1, title: 'Welcome Bonus', amount: '500', description: 'New players bonus' },
    { id: 2, title: 'Daily Reward', amount: '100', description: 'Daily login bonus' },
  ];

  return (
    <div>
      <div className="bg-yellow-500 text-white p-4 rounded-lg mb-4">
        <h3 className="text-xl font-bold mb-2">Special Offers</h3>
        <div className="space-y-0">
          {specialOffers.map((offer) => (
            <div key={offer.id} className="bg-white/10 p-0 rounded-lg backdrop-blur-sm">
              <h4 className="font-semibold">{offer.title}</h4>
              <p className="text-sm opacity-90">{offer.description}</p>
              <p className="text-2xl font-bold">${offer.amount}</p>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-700 transition">
          Claim Offers
        </button>
      </div>

      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/games"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded group"
            >
              <svg
                className="w-5 h-5 text-gray-500 group-hover:text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Online Games</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};