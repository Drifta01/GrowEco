import React from "react";

import { productData } from "@/mock-data/data";
import { Products } from "@/components/ProductCard";

const Page = async () => {
  // await for  1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <section className="container mx-auto py-20 object-cover">
        <div>
          <h2 className="text-3xl font-sans mt-0 text-center text-green-700">
            Our Products
          </h2>
          <p className="mt-2"></p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Products
            products={productData.filter((product) => product !== undefined)}
          />
        </div>
      </section>
    </>
  );
};

export default Page;
