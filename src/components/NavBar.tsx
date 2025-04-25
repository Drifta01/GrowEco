'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <nav className="grid-5 alpha bg-slate-600 text-white  p-4">
            <div className="container mx-auto flex gap-4">
                <div
                    className={`p-2 rounded-full transition-colors duration-200 m-1.5  ${
                        isHovered ? 'bg-yellow-300' : 'bg-yellow-500'
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Image
                        className="rounded-full"
                        src="/logo.jpg"
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </div>
      
                    <ul className="text-2xl text-white  font-semibold">
                        <li className="hover:text-yellow-300 transition duration-200">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-yellow-300 transition duration-200">
                            <Link href="/games">Games</Link>
                        </li>
                        <li className="hover:text-yellow-300 transition duration-200">
                            <Link href="/jackpots">Jackpots</Link>
                        </li>
                    </ul>
             
            </div>
        </nav>
    );
};
