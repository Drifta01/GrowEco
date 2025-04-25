'use client';
import React from 'react';

interface TopRatedGame {
  id: number;
  title: string;
  rating: number;
  players: string;
}

export const RightSidebar = () => {
  const topRatedGames: TopRatedGame[] = [
    { id: 1, title: 'Poker Stars', rating: 4.9, players: '10k+' },
    { id: 2, title: 'Blackjack Pro', rating: 4.8, players: '8k+' },
    { id: 3, title: 'Slots Master', rating: 4.7, players: '15k+' },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Top Rated Games</h3>
      <div className="space-y-4">
        {topRatedGames.map((game) => (
          <div
            key={game.id}
            className="p-3 border border-gray-200 rounded-lg hover:border-yellow-500 transition"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{game.title}</h4>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                {game.rating} ★
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Active Players: {game.players}</p>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full bg-slate-100 text-slate-800 px-4 py-2 rounded hover:bg-slate-200 transition">
        View All Games
      </button>
    </div>
  );
};