'use client';

import { useState } from 'react';
import Image from 'next/image';
import sportBet from '@/db/sportBet.json';
import Link from 'next/link';

export const SportBet = () => {
  const [selectedBets, setSelectedBets] = useState<{
    [key: string]: { selection: string; odds: number };
  }>({});
  const [betAmount, setBetAmount] = useState<number>(10);

  const calculateTotalOdds = () => {
    const selections = Object.values(selectedBets);
    if (selections.length === 0) return 0;

    return selections.reduce((total, current) => total * current.odds, 1);
  };

  const totalOdds = calculateTotalOdds();
  const potentialWinnings = (totalOdds * betAmount).toFixed(2);

  const toggleBetSelection = (
    matchId: string,
    selection: string,
    odds: number,
  ) => {
    setSelectedBets((prev) => {
      const newSelections = { ...prev };

      if (
        newSelections[matchId] &&
        newSelections[matchId].selection === selection
      ) {
        delete newSelections[matchId];
      } else {
        newSelections[matchId] = { selection, odds };
      }

      return newSelections;
    });
  };

  const isSelected = (matchId: string, selection: string) => {
    return selectedBets[matchId]?.selection === selection;
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h1 className="text-2xl font-bold mb-2">Sports Betting</h1>
              <p className="text-gray-600 mb-4">
                Find the best odds across multiple sports
              </p>

              {/* Sports navigation */}
              <div className="flex overflow-x-auto pb-2 mb-6">
                <div className="flex space-x-2">
                  {Array.from(
                    new Set(sportBet.map((sport) => sport.category)),
                  ).map((category) => (
                    <button
                      key={category}
                      className="px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap bg-slate-600 text-white hover:bg-slate-700"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured matches */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold border-b border-gray-200 pb-2 mb-4">
                  Featured Matches
                </h2>

                {sportBet
                  .filter((sport) => sport.featured)
                  .map((sport) => (
                    <div key={sport.id} className="mb-6">
                      <div className="flex items-center mb-3">
                        <Image
                          src={sport.icon}
                          alt="sportsName"
                          width={34}
                          height={34}
                          className="mr-2"
                        />
                        <h3 className="font-semibold text-lg">{sport.name}</h3>
                      </div>

                      <div className="bg-gray-50 rounded-lg overflow-hidden">
                        {sport.matches.map((match) => (
                          <div
                            key={match.id}
                            className="p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                              <div className="flex items-center mb-2 sm:mb-0">
                                {match.league && (
                                  <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded mr-2">
                                    {match.league}
                                  </span>
                                )}
                                <span className="text-sm text-gray-500">
                                  {match.date} · {match.time}
                                </span>
                              </div>

                              {match.live && (
                                <span className="inline-flex items-center bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                                  <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                                  LIVE
                                </span>
                              )}
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between">
                              <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start mb-3 sm:mb-0">
                                <div className="flex items-center space-x-2">
                                  {'team1Logo' in match && match.team1Logo && (
                                    <Image
                                      src={match.team1Logo}
                                      alt="teamLogo"
                                      width={24}
                                      height={24}
                                    />
                                  )}
                                  <span className="font-medium">
                                    {match.team1}
                                  </span>
                                </div>

                                <span className="mx-4 text-gray-400">vs</span>

                                <div className="flex items-center space-x-2">
                                  {'team2Logo' in match && match.team2Logo && (
                                    <Image
                                      src={match.team2Logo}
                                      alt={match.team2}
                                      width={24}
                                      height={24}
                                    />
                                  )}
                                  <span className="font-medium">
                                    {match.team2}
                                  </span>
                                </div>
                              </div>

                              <div className="flex space-x-2 w-full sm:w-auto justify-between">
                                <button
                                  className={`px-4 py-2 rounded border min-w-[80px] transition-colors ${
                                    isSelected(match.id, match.team1)
                                      ? 'bg-green-600 text-white border-green-600'
                                      : 'bg-white border-gray-300 hover:bg-gray-100'
                                  }`}
                                  onClick={() =>
                                    toggleBetSelection(
                                      match.id,
                                      match.team1,
                                      match.odds.team1,
                                    )
                                  }
                                >
                                  <div className="text-sm font-medium">
                                    {match.team1}
                                  </div>
                                  <div className="text-lg font-bold">
                                    {match.odds?.team1?.toFixed(2) || 'N/A'}
                                  </div>
                                </button>

                                {match.odds !== undefined && (
                                  <button
                                    className={`px-4 py-2 rounded border min-w-[80px] transition-colors ${
                                      isSelected(match.id, 'Draw')
                                        ? 'bg-green-600 text-white border-green-600'
                                        : 'bg-white border-gray-300 hover:bg-gray-100'
                                    }`}
                                    onClick={() =>
                                      toggleBetSelection(
                                        match.id,
                                        'Draw',
                                        match.odds.team1,
                                      )
                                    }
                                  >
                                    <div className="text-sm font-medium">
                                      Draw
                                    </div>
                                    <div className="text-lg font-bold">
                                      {match.odds.team1.toFixed(2)}
                                    </div>
                                  </button>
                                )}

                                <button
                                  className={`px-4 py-2 rounded border min-w-[80px] transition-colors ${
                                    isSelected(match.id, match.team2)
                                      ? 'bg-green-600 text-white border-green-600'
                                      : 'bg-white border-gray-300 hover:bg-gray-100'
                                  }`}
                                  onClick={() =>
                                    toggleBetSelection(
                                      match.id,
                                      match.team2,
                                      match.odds.team2,
                                    )
                                  }
                                >
                                  <div className="text-sm font-medium">
                                    {match.team2}
                                  </div>
                                  <div className="text-lg font-bold">
                                    {match.odds?.team2?.toFixed(2) || 'N/A'}
                                  </div>
                                </button>
                              </div>
                            </div>

                            <div className="mt-2 text-right">
                              <Link
                                href={`/match/${match.id}`}
                                className="text-blue-600 text-sm hover:underline"
                              >
                                +{match.marketCount} more markets
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>

              {/* More sports */}
              {sportBet
                .filter((sport) => !sport.featured)
                .map((sport) => (
                  <div key={sport.id} className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <Image
                          src={sport.icon}
                          alt={sport.name}
                          width={54}
                          height={54}
                          className="mr-2"
                        />
                        <h3 className="font-semibold text-lg">{sport.name}</h3>
                      </div>
                      <Link
                        href={`/sports/${sport.slug}`}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        View all
                      </Link>
                    </div>

                    <div className="bg-gray-50 rounded-lg overflow-hidden">
                      {sport.matches.slice(0, 2).map((match) => (
                        <div
                          key={match.id}
                          className="p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                            <div className="flex items-center">
                              {match.league && (
                                <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded mr-2">
                                  {match.league}
                                </span>
                              )}
                              <span className="text-sm text-gray-500">
                                {match.date} · {match.time}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row items-center justify-between">
                            <div className="flex items-center w-full sm:w-auto justify-between mb-3 sm:mb-0">
                              <span className="font-medium">{match.team1}</span>
                              <span className="mx-4 text-gray-400">vs</span>
                              <span className="font-medium">{match.team2}</span>
                            </div>

                            <div className="flex space-x-2 w-full sm:w-auto justify-between">
                              <button
                                className={`px-3 py-1 rounded border transition-colors ${
                                  isSelected(match.id, match.team1)
                                    ? 'bg-green-600 text-white border-green-600'
                                    : 'bg-white border-gray-300 hover:bg-gray-100'
                                }`}
                                onClick={() =>
                                  toggleBetSelection(
                                    match.id,
                                    match.team1,
                                    match.odds.team1,
                                  )
                                }
                              >
                                <div className="text-lg font-bold">
                                  {match.odds.team1.toFixed(2)}
                                </div>
                              </button>

                              {match.odds !== undefined && (
                                <button
                                  className={`px-3 py-1 rounded border transition-colors ${
                                    isSelected(match.id, 'Draw')
                                      ? 'bg-green-600 text-white border-green-600'
                                      : 'bg-white border-gray-300 hover:bg-gray-100'
                                  }`}
                                  onClick={() =>
                                    toggleBetSelection(
                                      match.id,
                                      'Draw',
                                      match.odds.team1,
                                    )
                                  }
                                >
                                  <div className="text-lg font-bold">
                                    {match.odds.team1.toFixed(2)}
                                  </div>
                                </button>
                              )}

                              <button
                                className={`px-3 py-1 rounded border transition-colors ${
                                  isSelected(match.id, match.team2)
                                    ? 'bg-green-600 text-white border-green-600'
                                    : 'bg-white border-gray-300 hover:bg-gray-100'
                                }`}
                                onClick={() =>
                                  toggleBetSelection(
                                    match.id,
                                    match.team2,
                                    match.odds.team2,
                                  )
                                }
                              >
                                <div className="text-lg font-bold">
                                  {match.odds.team2.toFixed(2)}
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Bet slip */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md sticky top-6">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-bold text-lg">Bet Slip</h2>
              </div>

              {Object.keys(selectedBets).length > 0 ? (
                <div className="p-4">
                  <div className="space-y-3 mb-4">
                    {Object.entries(selectedBets).map(([matchId, bet]) => {
                      const match = sportBet
                        .flatMap((sport) => sport.matches)
                        .find((m) => m.id === matchId);
                      if (!match) return null;

                      return (
                        <div
                          key={matchId}
                          className="bg-gray-50 p-3 rounded relative"
                        >
                          <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                            onClick={() =>
                              toggleBetSelection(
                                matchId,
                                bet.selection,
                                bet.odds,
                              )
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <div className="text-xs text-gray-500 mb-1">
                            {match.league}
                          </div>
                          <div className="font-medium">
                            {match.team1} vs {match.team2}
                          </div>
                          <div className="flex justify-between mt-2">
                            <span className="text-sm">
                              {bet.selection} (1X2)
                            </span>
                            <span className="font-bold">
                              {bet.odds.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bet Amount
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                        $
                      </span>
                      <input
                        type="number"
                        min="1"
                        value={betAmount}
                        onChange={(e) =>
                          setBetAmount(Math.max(1, parseFloat(e.target.value)))
                        }
                        className="pl-8 block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-100 p-3 rounded mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Type</span>
                      <span className="font-medium">
                        Accumulator ({Object.keys(selectedBets).length})
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Total Odds</span>
                      <span className="font-bold">{totalOdds.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Potential Win
                      </span>
                      <span className="font-bold text-green-600">
                        ${potentialWinnings}
                      </span>
                    </div>
                  </div>

                  <button className="bg-green-600 text-white w-full py-3 rounded-md font-bold hover:bg-green-700 transition-colors">
                    Place Bet
                  </button>
                </div>
              ) : (
                <div className="p-4 text-center">
                  <div className="text-gray-500 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500">Your bet slip is empty</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Click on any odds to add a selection
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportBet;
