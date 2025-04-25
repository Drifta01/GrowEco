// This is a Next.js page component for the "Games" page.
// It imports React and the useState hook from React, and defines a functional component called "Games".

export interface jackpots {
  id: string;
  name: string;
  imageUrl: string;
  currentJackpot: number;
  nextDraw: string;
  description: string;
}

  
  export interface Game {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }

  export interface GameCardProps {
      title: string;
      imagePath: string;
      altText?: string;
      width?: number;
      height?: number;
  }
