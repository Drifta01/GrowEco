

'use client';
import Image from 'next/image';
import './globals.css';
import casinos from '@/data/casinos.json';
import Link from 'next/link';
import { useState } from 'react';

// Remove the named export and directly use default export
export default function Home() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  
  const featuredCasino = casinos[0]; 
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hover Menu */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div 
              className="relative group px-6 py-3 cursor-pointer"
              onMouseEnter={() => setActiveMenu(1)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="flex items-center space-x-1">
                <span className="font-medium">Casino Promotions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {activeMenu === 1 && (
                <div className="absolute left-0 top-full mt-1 w-72 bg-white border border-gray-200 shadow-lg rounded-md z-20">
                  <div className="p-4">
                    <h3 className="font-bold text-lg border-b pb-2 mb-3">{featuredCasino.promotions.title}</h3>
                    <ul className="space-y-3">
                      {featuredCasino.promotions.items.map((promo, idx) => (
                        <li key={idx} className="hover:bg-gray-50 p-2 rounded transition-colors">
                          <p className="font-semibold text-slate-700">{promo.title}</p>
                          <p className="text-sm text-gray-500">{promo.description}</p>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href="/promotions" 
                      className="block mt-4 text-center text-sm text-indigo-600 hover:underline"
                    >
                      View all promotions
                    </Link>
                  </div>
                </div>
              )}
              
            </div>
            
            <div 
              className="relative group px-6 py-3 cursor-pointer"
              onMouseEnter={() => setActiveMenu(3)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="flex items-center space-x-1">
                <span className="font-medium">Top Casinos</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              {activeMenu === 3 && (
                <div className="absolute left-0 top-full mt-1 w-72 bg-white border border-gray-200 shadow-lg rounded-md z-20">
                  <div className="p-4">
                    <h3 className="font-bold text-lg border-b pb-2 mb-3">Featured Casinos</h3>
                    <div className="space-y-3">
                      {casinos.slice(0, 4).map((casino) => (
                        <div key={casino.id} className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded transition-colors">
                          <div className="relative w-10 h-10 flex-shrink-0">
                            <Image
                              src={casino.image}
                              alt={casino.name}
                              fill
                              className="object-contain"
                              sizes="40px"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-slate-700">{casino.name}</p>
                            <div className="flex text-yellow-400">
                              {[...Array(Math.floor(casino.rating))].map((_, i) => (
                                <span key={i}>★</span>
                              ))}
                              {casino.rating % 1 !== 0 && <span>½</span>}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link 
                      href="/casinos" 
                      className="block mt-4 text-center text-sm text-indigo-600 hover:underline"
                    >
                      View all casinos
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Recommended Casinos</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {casinos.map((casino) => (
              <div 
                key={casino.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={casino.image}
                    alt={`${casino.name} logo`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.jpg';
                    }}
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-sm font-bold text-gray-800 shadow">
                    {casino.rating} ★
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">{casino.name}</h3>
                  
                  <div className="mb-4 h-16 overflow-hidden">
                    <p className="text-gray-600 text-sm">
                      {Array.isArray(casino.games) && casino.games.slice(0, 3).join(", ")}
                      {Array.isArray(casino.games) && casino.games.length > 3 ? "..." : ""}
                    </p>
                  </div>
                  
                  <Link 
                    href={casino.url || "#"} 
                    target={casino.targetBlank ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="block w-full bg-slate-600 text-white text-center py-2 rounded-md hover:bg-slate-700 transition-colors font-medium"
                  >
                    Play Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keep the rest of your existing sections */}
    </div>
  );
};











