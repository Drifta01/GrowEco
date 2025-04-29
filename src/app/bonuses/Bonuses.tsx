'use client';
import React from 'react';
import Image from 'next/image';
import bonus from '@/data/bonus.json'; 




export const Bonuses = (
    data = bonus, 
) => {
    
    console.log(data);

    return (
        <div className="bg-gray-50 py-2">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-semibold mb-8">Bonuses</h1>
                <div className="mx-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {bonus.map((bonus) => (
                        <div key={bonus.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div key={bonus.name}>
                                <div key={bonus.description}>
                                  
                            <div className="p-4">
                                <div className="flex justify-center items-center h-18">
                                    <Image
                                        src={bonus.image} 
                                        alt={'bonuses.image'}
                                        width={100}
                                        height={100}
                                        className="object-contain"
                                    />
                                </div>

                              
                            </div>
                        </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-center mt-2">{bonus.name}</h3>
                            <p className="text-sm text-gray-600 text-center mt-2">{bonus.description}</p>
                            <p className="text-sm text-gray-600 text-center mt-2">{bonus.id}</p>
                            <p className="text-sm text-gray-600 text-center mt-2">{bonus.site}</p>
                          

                            </div>
                            <div className="flex justify-center mt-4">
                                    <button className="bg-gray-700 text-white hover:bg-gray-300 hover:text-black font-bold py-2 px-4 rounded mb-2">
                                        Play Now
                                    </button>
                                </div>
                            </div>
                            
                    ))}
                </div>
            </div>
          
        </div>
    );
}

