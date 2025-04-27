'use client';

import Image from 'next/image';

 const Page = () => {
    const gameImages = [
        { src: "/pinky.png", alt: "pinky" },
        { src: "/2029.jpg", alt: "2029" },
        { src: "/16352.jpg", alt: "16532" },
        { src: "/21681.jpg", alt: "21681" },
        { src: "/38396.jpg", alt: "38396" },
        { src: "/luckyTwins.jpg", alt: "luckyTwins" },
        { src: "/NestEgg.jpg", alt: "NestEgg" },
        { src: "/49024.jpg", alt: "49024" },
        { src: "/49010.jpg", alt: "49010" },
        { src: "/49010.jpg", alt: "49010" },
    ];

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6 text-slate-800">Available Games</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {gameImages.map((game, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                        <Image
                            className="w-full h-auto object-cover"
                            src={game.src}
                            alt={game.alt}
                            width={200}
                            height={200}
                        />
                    </div>
                ))}
            </section>
         
        </div>
    );
};
export default Page;    

