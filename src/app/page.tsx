import React from "react";
import { Hero } from "@/components/Hero";
import { Products } from "../components/ProductCard";
import { productData } from "@/mock-data/data";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <Products products={productData.slice(1)} />
      <Hero />
    </div>
  );
}
