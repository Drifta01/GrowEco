import React from "react";
import JackpotGames from '../../components/JackpotGames';
import { Hero } from "@/components/Hero";




export const Page = async () => {
  // await for  1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

    return (
      <>
      <div className="container mx-auto py-20">
        <h3 className="text-4xl font-bold text-center mb-10">Games</h3>
        <Hero />
        <JackpotGames />
      </div>
      </>
    );
  };

