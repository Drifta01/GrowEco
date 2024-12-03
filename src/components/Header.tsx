import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <header className="bg-green-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">GrowEco</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link className="hover:underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
