'use client';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <header className="bg-slate-600 text-white">
        <nav className="max-w-7xl p-4 flex justify-between items-center">
        
          <p className="text-white text-2xl font-bold ">Gaming Directory</p>
          <div className="flex space-x-8">
            <div className="space-x-4">
              <Link href="/casinos">Casinos</Link>
              <Link href="/bonuses">Bonuses</Link>
              <Link href="/games">Games</Link>
              <Link href="/betting">Betting</Link>
              {/* <Link href="/">Complaints</Link>
              <Link href="/">News</Link>
              <Link href="/">Forum</Link>
              <Link href="/">About</Link> */}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
