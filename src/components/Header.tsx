'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="bg-slate-700 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div
            className={`p-2 rounded-full transition-colors duration-200 ${
              isHovered ? 'bg-yellow-300' : 'bg-yellow-500'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              className="rounded-full"
              src="/logo.jpg"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>
          <ul className="flex space-x-4 text-lg font-semibold">
            <li>
              <Link href="/" className="hover:text-yellow-300 transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/games" className="hover:text-yellow-300 transition duration-200">
                Games
              </Link>
            </li>
            <li>
              <Link href="/jackpots" className="hover:text-yellow-300 transition duration-200">
                Jackpots
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
