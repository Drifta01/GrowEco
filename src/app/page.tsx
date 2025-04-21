import React from "react";
import { Hero } from "@/components/Hero";


import { GamingCard } from "../components/GamingCard";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <Hero />
    <GamingCard />
    </div>
  );
}
