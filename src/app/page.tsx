import React from "react";
import { Hero } from "@/components/Hero";

import Product from "@/components/Products";
import productData from "@/mock-data/data";
import Toggle from "@/components/forms/Toggle";

const Page = () => {
  return (
    <span className="container py-20 object-cover">
      <Hero />
      <Toggle />
    </span>
  );
};
export default Page;
