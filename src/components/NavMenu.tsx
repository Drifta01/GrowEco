'use client';
import Image from 'next/image';

import Link from 'next/link';

export const NavMenu = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <section className="py-2">
        <div className="grid grid-cols-4 gap-4  max-w-3/4 mx-auto bg-slate-900 rounded-md overflow-hidden">
          <Link
            href="/casinos"
            className="flex flex-col items-center text-center p-6 text-white hover:bg-gray-700 transition-colors"
          >
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center mb-2">
              <p className="text-white" />
            </div>
            <span className="text-sm">Casinos</span>
          </Link>

          <Link
            href="/bonuses"
            className="flex flex-col items-center text-center p-6 text-white hover:bg-gray-700 transition-colors"
          >
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mb-2">
              <div className="text-white" />
            </div>
            <span className="text-sm">Bonuses</span>
          </Link>

          <Link
            href="/slots"
            className="flex flex-col items-center text-center p-6 text-white hover:bg-gray-700 transition-colors"
          >
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-2">
              <div className="text-white" />
            </div>
            <span className="text-sm">Slots</span>
          </Link>

          <Link
            href="/sportBet"
            className="flex flex-col items-center text-center p-6 text-white hover:bg-gray-700 transition-colors"
          >
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mb-2">
              <div className="text-white" />
            </div>
            <span className="text-sm">Sports Bet</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
