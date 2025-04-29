'use client';
import React from 'react';
import Image from 'next/image';
import slots from '@/data/slots.json'; // Assuming you have a JSON file with casino data

const GamingCard = () => {
    return (
        <div className="container bg-slate-600 text-white  mt-40 p-4  shadow-lg">
            <div>

            <h3 className='text-4xl ml-100'>Game Title</h3>
            </div>

            <Image
                width={300}
                height={200}
                src={slots[1].image}
                alt="Game thumbnail"
                className="game-thumbnail"
            />
        </div>
    );
};
export default GamingCard;
