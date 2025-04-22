
import React from 'react';
import Link from 'next/link';



export const Header = () => {
    return (
        <div className="container mx-auto flex justify-between items-center">
            <h1
                className="text-6xl font-bold font-serif text-center text-white"
                style={{
                    fontFamily: 'Courier New, monospace',
                }}
            >
                Games
            </h1>
            <nav>
                <ul className="flex space-x-4 font-serif text-lg">
                    <li>
                        <Link className="hover:underline" href="#">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:underline" href="/LatestGames">
                            Latest
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:underline" href="/Jackpots">
                            Jackpots
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:underline" href="/contact">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

