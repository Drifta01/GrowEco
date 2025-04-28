'use client';
import Image from 'next/image';

import Link from 'next/link';

export const NavMenu = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <section className="text-center py-16 bg-gray-200">
        <h1 className="text-4xl font-bold mb-4">Text Here</h1>
        <p className="text-lg max-w-3xl mx-auto mb-0"></p>
        <div className="flex justify-center space-x-6">
          <Link
            href="/"
            className="bg-fray-200 text-black py-2 px-4 rounded-lg"
          >
            <Image
              className="rounded-full"
              src="/icons8-home-94.png"
              alt="bonus"
              width={100}
              height={100}
            />
            Home
          </Link>
          <Link
            href="/casinos"
            className="bg-fray-200 text-black py-2 px-4 rounded-lg"
          >
            <Image
              className="rounded-full"
              src="/icons8-roulette-94.png"
              alt="bonus"
              width={100}
              height={100}
            />
            Casinos
          </Link>
          <Link
            href="/bonuses"
            className="bg-gray-200 text-black py-2 px-4 rounded-lg"
          >
            <Image
              className="rounded-full"
              src="/icons8-gift-48.png"
              alt="bonus"
              width={100}
              height={100}
            />
            Bonuses
          </Link>
          <Link
            href="/games"
            className="bg-gray-200 text-black py-2 px-4 rounded-lg"
          >
            <Image
              className="rounded-full"
              src="/icons8-casino-48.png"
              alt="bonus"
              width={100}
              height={100}
            />
            Games
          </Link>
          <Link
            href="/sportsbetting"
            className="bg-gray-200 text-black py-2 px-4 rounded-lg"
          >
            <Image
              className="rounded-full"
              src="/icons8-money-48.png"
              alt="bonus"
              width={100}
              height={100}
            />
            Sports Betting
          </Link>
        </div>
      </section>
    </div>
  );
};
