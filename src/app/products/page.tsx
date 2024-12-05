import React from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { productData } from "@/mock-data/data";

const Page = async () => {
  // await for  1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <section className="container mx-auto py-20">
      <h3 className="text-4xl font-bold text-center mb-10">Our Products</h3>
      <ProductCard products={productData} />
    </section>
  );
};

export default Page;
