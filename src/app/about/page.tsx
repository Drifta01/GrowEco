import React from "react";
import Hero from "@/components/Hero";

import productData from "@/mock-data/data";
import Link from "next/link";

const Page = async () => {


  return (
    <>
    <Hero />
    <section className="container mx-auto py-20">
      <h3 className="text-4xl font-bold text-start mb-10">About Us</h3>
</section>
</>

  );
};
export default Page;
