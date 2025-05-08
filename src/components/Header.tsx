'use client';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className="bg-slate-900 text-slate-900">
      <header className="bg-slate-900 text-white ">
        <nav className="max-w-7xl p-4 flex md:flex min-w-max justify-between items-center">
          <p className="text-red-600 bg-white font-bold ">SLOTS DIRECT</p>
          <div className="flex space-x-8 text-red-600 ">
            <div className="space-x-4">
              <Link href="/">Home</Link>
              <Link href="/casinos">Casinos</Link>
              <Link href="/bonuses">Bonuses</Link>
              <Link href="/slots">Slots</Link>
              <Link href="/sportBet">Sports Betting</Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
