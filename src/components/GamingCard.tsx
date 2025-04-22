import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



export const GamingCard = () => {
    return (
        <>
            <div className="bg-slate-600  hover:bg-slate-700 transition duration-300">
             

                <div className="absolute inset-0 bg-black opacity-50 rounded-lg">
                    <section className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-6xl font-bold font-serif text-center text-white">
                            Game Title
                        </h1>
                        <h2 className="text-4xl font-bold font-serif text-center text-white">
                            Game Subtitle
                        </h2>
                        <p className="text-2xl font-bold font-serif text-center text-white">
                            {
                                'Game Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        </p>
                        <p className="text-2xl font-bold font-serif text-center text-white">
                            {
                                'Game Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        </p>
                        <p className="text-2xl font-bold font-serif text-center text-white">
                            {
                                'Game Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            }
                        </p>
                    </section>

                    <p className="text-gray-700 text-base mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>
                <div className="px-6 pb-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Play Now
                    </button>
                </div>
            </div>
        </>
    );
};
