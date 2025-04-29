'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-slate-600 text-white mt-auto w-full">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-white">
              Your trusted guide to online gaming entertainment and information.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/slots" className="hover:underline">Slots</Link></li>
              <li><Link href="/bonuses" className="hover:underline">Bonuses</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

       
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded text-black  focus:outline-white focus:ring-2 focus:ring-indigo-600 bg-gray-400"
                required
              />
              <button 
                type="submit" 
                className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-500 mt-2 pt-2 text-center text-sm">
          <p>© {new Date().getFullYear()} Slots Direct. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
