import React from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { productData } from "@/mock-data/data";
import { Hero } from "@/components/products/Hero";

const Page = async () => {
  // await for  1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
    <section className="container mx-auto py-20 object-cover">

      <div className="flex-auto">

          <h2 className="text-3xl font-sans mt-0 text-center text-green-700">Our Products</h2>
          <p className="mt-2"></p>
        </div>

      <ProductCard products={productData} />



    </section>

    </>
      );
};



export default Page;
