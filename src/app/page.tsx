import React from "react";
import { Hero } from "@/components/products/Hero";
import { ProductCard } from "@/components/products/ProductCard";
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
