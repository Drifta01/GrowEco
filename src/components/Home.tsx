'use client';
import React from 'react';


export const Home = () => {
    return (
        <div className="grid-5 alpha bg-slate-600 text-white h-screen w-screen p-4">
            <p className="">Welcome to the home page!</p>
            

            <input
                type="text"
                max-length="30"
                name="casinoname"
                placeholder="Search..."
                className=" bg-gray-100 border border-gray-800 rounded-lg p-2 w-1/4  text-gray-800"
            ></input>
   
        </div>
    );
};
