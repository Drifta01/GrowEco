import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <header className="bg-slate-600  hover:bg-slate-700 transition duration-300
     text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-6xl font-bold font-serif text-center text-white"
          style={{
            fontFamily: "Courier New, monospace",
          }}
        >
          Games
        </h1>
        <nav>
          <ul className="flex space-x-4 font-serif text-lg">
            <li>
              <Link className="hover:underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/products">
                Latest
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/about">
                Jackpots
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hidden" href="/cart">
             About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
