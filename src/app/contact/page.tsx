import React from "react";

import { Contact } from "@/components/Contact";
import Hero from "@/components/Hero";

const Page = async () => {
  return (
    <>
      <Hero />
      <section className="container mx-auto py-20 object-cover">
        <div
          className="max-w-7xl mx-auto p-4 sm:p-6 lg
      :p-8"
        ></div>
      </section>
      <section className="container mx-auto py-20 object-cover">
        <div
          className="max-w-7xl mx-auto p-4 sm:p-6 lg
      :p-8"
        >
          <Contact />
        </div>
      </section>
    </>
  );
};
export default Page;
