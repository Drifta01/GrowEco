import React from "react";
import Hero from "@/components/Hero";

const Page = async () => {
  return (
    <>
      <Hero />
      <section className="container mx-auto py-20 object-cover">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg"></div>

        <h3 className="text-4xl font-bold text-start mb-10">cart</h3>
      </section>
    </>
  );
};
export default Page;
