'use client';

import { useState } from 'react';
import Image from 'next/image';
import matches from '@/db/matches.json';

export const SportBet = () => {
  const [selectedBets, setSelectedBets] = useState<{
    [key: string]: { team: string; odds: number };
  }>({});
  const [betAmount, setBetAmount] = useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const matchesPerPage = 6;

  const calculateTotalOdds = () => {
    const selections = Object.values(selectedBets);
    if (selections.length === 0) return 0;

    return selections.reduce((total, current) => total * current.odds, 1);
  };

  const totalOdds = calculateTotalOdds();
  const potentialWinnings = (totalOdds * betAmount).toFixed(2);

  const toggleBetSelection = (matchId: string, team: string, odds: number) => {
    setSelectedBets((prev) => {
      const newSelections = { ...prev };

      if (newSelections[matchId]?.team === team) {
        delete newSelections[matchId];
      } else {
        newSelections[matchId] = { team, odds };
      }

      return newSelections;
    });
  };

  const isSelected = (matchId: string, team: string) => {
    return selectedBets[matchId]?.team === team;
  };

  const filteredMatches = matches
    .filter(
      (match) =>
        match.category === selectedCategory || selectedCategory === 'All',
    )
    .filter(
      (match) =>
        match.team1.toLowerCase().includes(searchQuery.toLowerCase()) ||
        match.team2.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  const paginatedMatches = filteredMatches.slice(
    (currentPage - 1) * matchesPerPage,
    currentPage * matchesPerPage,
  );

  return (
    <main>
      {/* Sports Overview Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-600 text-4xl font-bold text-center mb-6">
            Explore Sports and Betting Types
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Discover a variety of sports and betting options, including live
            betting, over/under, and more.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image
                src="/images/popular-sports.png"
                alt="Popular Sports"
                width={50}
                height={50}
              />
              <h3 className="text-gray-800 font-bold mt-2">Popular Sports</h3>
              <p className="text-sm text-gray-500">
                Football, Basketball, and more.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image
                src="/images/american-sports.png"
                alt="American Sports"
                width={50}
                height={50}
              />
              <h3 className="text-gray-800 font-bold mt-2">American Sports</h3>
              <p className="text-sm text-gray-500">NFL, NBA, MLB, and NHL.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image
                src="/images/winter-sports.png"
                alt="Winter Sports"
                width={50}
                height={50}
              />
              <h3 className="text-gray-800 font-bold mt-2">Winter Sports</h3>
              <p className="text-sm text-gray-500">Hockey, Skiing, and more.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image
                src="/images/combat-sports.png"
                alt="Combat Sports"
                width={50}
                height={50}
              />
              <h3 className="text-gray-800 font-bold mt-2">Combat Sports</h3>
              <p className="text-sm text-gray-500">MMA, Boxing, and more.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-center">
              <Image
                src="/images/live-betting.png"
                alt="Live Betting"
                width={50}
                height={50}
              />
              <h3 className="text-gray-800 font-bold mt-2">Live Betting</h3>
              <p className="text-sm text-gray-500">
                Bet on matches in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 sm:mb-0"
          >
            <option value="All">All Categories</option>
            <option value="Popular">Popular</option>
            <option value="American Sports">American Sports</option>
            <option value="Winter Sports">Winter Sports</option>
            <option value="Combat Sports">Combat Sports</option>
          </select>
          <input
            type="text"
            placeholder="Search matches..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto"
          />
        </div>
      </section>

      {/* Sports Betting Section */}
      <section id="sports-betting" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-600 text-4xl font-bold text-center mb-10">
            Featured Matches
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedMatches.map((match) => (
              <div key={match.id} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Image
                      src={match.team1Logo || '/placeholder.jpg'}
                      alt={match.team1}
                      width={24}
                      height={24}
                      className="mr-2"
                    />
                    <span>{match.team1}</span>
                  </div>
                  <span className="text-gray-400">vs</span>
                  <div className="flex items-center">
                    <span>{match.team2}</span>
                    <Image
                      src={match.team2Logo || '/placeholder.jpg'}
                      alt={match.team2}
                      width={24}
                      height={24}
                      className="ml-2"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <button
                    onClick={() =>
                      toggleBetSelection(
                        match.id,
                        match.team1,
                        match.odds.team1,
                      )
                    }
                    className={`px-4 py-2 rounded-md font-bold ${
                      isSelected(match.id, match.team1)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {match.team1} ({match.odds.team1.toFixed(2)})
                  </button>
                  <button
                    onClick={() =>
                      toggleBetSelection(
                        match.id,
                        match.team2,
                        match.odds.team2,
                      )
                    }
                    className={`px-4 py-2 rounded-md font-bold ${
                      isSelected(match.id, match.team2)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {match.team2} ({match.odds.team2.toFixed(2)})
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-gray-200 rounded-l-md"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(
                    prev + 1,
                    Math.ceil(filteredMatches.length / matchesPerPage),
                  ),
                )
              }
              className="px-4 py-2 bg-gray-200 rounded-r-md"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Bet Slip Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-gray-600 text-4xl font-bold text-center mb-10">
            Your Bet Slip
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {Object.keys(selectedBets).length > 0 ? (
              <div>
                <div className="space-y-4 mb-6">
                  {Object.entries(selectedBets).map(([matchId, bet]) => (
                    <div
                      key={matchId}
                      className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm"
                    >
                      <div>
                        <p className="text-gray-800 font-semibold">
                          {bet.team}
                        </p>
                        <p className="text-sm text-gray-500">
                          Odds: {bet.odds.toFixed(2)}
                        </p>
                      </div>
                      <button
                        className="text-red-500 hover:text-red-700 font-medium"
                        onClick={() =>
                          toggleBetSelection(matchId, bet.team, bet.odds)
                        }
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 font-medium">
                      Total Odds:
                    </span>
                    <span className="text-gray-800 font-bold">
                      {totalOdds.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 font-medium">
                      Bet Amount:
                    </span>
                    <input
                      type="number"
                      value={betAmount}
                      onChange={(e) => setBetAmount(Number(e.target.value))}
                      className="border border-gray-300 rounded-md px-3 py-2 w-24 text-right"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-600 font-medium">
                      Potential Winnings:
                    </span>
                    <span className="text-green-600 font-bold text-lg">
                      ${potentialWinnings}
                    </span>
                  </div>
                  <button className="bg-blue-600 text-white w-full py-3 rounded-md font-bold hover:bg-blue-700 transition-colors">
                    Place Bet
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-center">
                Your bet slip is empty. Select a team to add it to your bet
                slip.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SportBet;
