import React from "react";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { productData } from "@/mock-data/data";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <Hero />
      <ProductCard products={productData} />
      
    </div>
  );
}
