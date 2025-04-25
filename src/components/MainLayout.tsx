'use client';
import React from 'react';
import { LeftSidebar } from './LeftSidebar';
import { RightSidebar } from './RightSidebar';
import { Footer } from './Footer';
import { Header } from './Header';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-6 max-w-6xl mx-auto">
          <aside className="bg-white rounded-lg shadow-md p-4">
            <LeftSidebar />
          </aside>
          <main className="bg-white rounded-lg shadow-md p-6">
            {children}
          </main>
          <aside className="bg-white rounded-lg shadow-md p-4">
            <RightSidebar />
          </aside>
        </div>
      </div>
      <Footer />
   
    </div>
  );
};