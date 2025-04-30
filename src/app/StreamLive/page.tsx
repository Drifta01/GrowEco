import React from 'react';
import { StreamLive } from './StreamLive';
import streaming from 'data/streaming.json';
import getStreamLive from '@/actions/getStreamLive';

export default async function Page() {
  const liveStreamData = await getStreamLive();

  return (
    <div className="container mx-auto py-8 px-4">
      <StreamLive data={streaming} />

      <div className="mt-8">
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 aria-hidden:">
       
        </div>
      </div>
    </div>
  );
}
