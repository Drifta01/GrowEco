'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="flex space-x-8 bg-gray-100 text-gray-900">
      <footer className="bg-slate-600 text-white absolute bottom-0 w-full">
        <nav className="max-w-7xl p-4 flex justify-between items-center">
          <h3 className="text-lg font-bold mb-4">About Us</h3>

          <h3 className="text-lg font-bold mb-4">Quick Links</h3>

          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p className="text-white">
            Your trusted guide to online gaming entertainment and information.
          </p>
          <div className="flex"></div>
        </nav>
      </footer>
    </div>
  );
};
