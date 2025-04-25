'use client';

import React from 'react';

import Image from 'next/image';

const Games = () => {
    return (
        <div className="form-text grid-5 alpha bg-slate-600 text-white h-screen w-screen p-4">
            <section className="grid grid-cols-3 grid-rows-3 bg-slate-500 h-full w-full ">
                <Image
                    className="rounded-l-md mx-auto max-h-full border-black border-[3px]"
                    src="/pinky.png"
                    alt="pinky"
                    width={200}
                    height={200}
                />
                <Image
                    className="rounded-l-md mx-auto max-h-full border-black border-[3px]"
                    src="/2029.jpg"
                    alt="2029"
                    width={200}
                    height={200}
                />
                <Image
                    className="rounded-l-md mx-auto max-h-full border-black border-[3px]"
                    src="/16352.jpg"
                    alt="16532"
                    width={200}
                    height={200}
                />
                <Image
                    className="rounded-l-md mx-auto max-h-full border-black border-[3px]"
                    src="/21681.jpg"
                    alt="21681"
                    width={200}
                    height={200}
                />
                <Image
                    className="rounded-l-md mx-auto max-h-full border-black border-[3px]"
                    src="/38396.jpg"
                    alt="38396"
                    width={200}
                    height={200}
                />
                <Image
                    className="rounded-l-md mx-auto max-h-full border-black border-[3px]"
                    src="/luckyTwins.jpg"
                    alt="luckyTwins"
                    width={200}
                    height={200}
                />
                <Image
                    className="rounded-l-md mx-auto max-h-full border-black border-[3px]"
                    src="/NestEgg.jpg"
                    alt="NestEgg"
                    width={200}
                    height={200}
                />
                <Image
                    className="rounded-l-md mx-auto max-h-full border-black border-[3px]"
                    src="/49024.jpg"
                    alt="49024"
                    width={200}
                    height={200}
                />
                <Image
                    className="rounded-l-md mx-auto max-h-full border-black border-[3px]"
                    src="/49010.jpg"
                    alt="49010"
                    width={200}
                    height={200}
                />
            </section>
        </div>
    );
};
export default Games;
