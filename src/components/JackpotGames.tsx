import React from "react";
import Image from "next/image";

interface Game {
  id: string;
  name: string;
  imageUrl: string;
  currentJackpot: number;
  nextDraw: string;
  description: string;
}

const games: Game[] = [
  {
    id: "1",
    name: "Mega Millions",
    imageUrl: "/images/mega-millions.jpg",
    currentJackpot: 1000000,
    nextDraw: "2025-04-23",
    description: "America's biggest jackpot game"
  },
  {
    id: "2",
    name: "Powerball",
    imageUrl: "/images/powerball.jpg",
    currentJackpot: 750000,
    nextDraw: "2025-04-22",
    description: "The world-famous lottery game"
  },
  // Add more games as needed
];

const JackpotGames: React.FC = () => {
  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <div 
            key={game.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <Image
                src={game.imageUrl}
                alt={game.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{game.name}</h3>
              <p className="text-gray-600 mb-4">{game.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Jackpot:</span>
                  <span className="text-green-600 font-bold">
                    ${game.currentJackpot.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Next Draw:</span>
                  <span className="text-blue-600">
                    {new Date(game.nextDraw).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <button 
                className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
              >
                Play Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JackpotGames;
