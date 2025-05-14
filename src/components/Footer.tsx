'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-auto w-full sticky bottom-0">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div></div>

          <div>
            <form className="flex flex-col sm:flex-row gap-2"></form>
          </div>
        </div>

        <div className="border-t border-gray-500 mt-2 pt-2 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Slots Direct. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
