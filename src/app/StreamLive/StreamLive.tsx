'use client';

import React, { useState } from 'react';
import streaming from '@/data/streaming.json';
import getStreamLive from '@/actions/getStreamLive';
import Image from 'next/image';

export const StreamLive = ({ data = streaming }) => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-xl">
      <div className="p-4 bg-gray-800 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-white">Live Streams</h2>
        <div className="text-gray-300">
          {streaming.data.map((streaming) => (
            <div key={streaming.id}>
              <p>{streaming.title}</p>

              <Image
                src={streaming.Image}
                alt="wildz"
                width={100}
                height={100}
                className="rounded-lg shadow-lg mb-4"
              ></Image>

              <div
                key={streaming.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-4"
              >
                <div className="relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                    <div className="text-lg font-semibold">
                      {streaming.playlistUrl}
                    </div>
                    <iframe
                   autoFocus={true}
                      className="absolute inset-0 w-full h-full"
                      src={streaming.playlistUrl}
                      title="Live Stream"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>

                    <div className="flex items-center"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
