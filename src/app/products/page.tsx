import React from "react";
import { GamingCard } from "@/components/GamingCard";

const Page = async () => {
  // await for  1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <section className="container mx-auto py-20">
    
      <GamingCard />
    </section>
  );
};

export default Page;
