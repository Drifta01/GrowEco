import React from "react";

import Products from "@/components/Products";
import Hero from "@/components/Hero";


const Page = async () => {

  return (
    <>
    <Hero />
      <section className="container mx-auto py-20 object-cover">
        <div>
          <h2 className="text-3xl font-sans mt-0 text-center text-green-700">
            Our Products
          </h2>
          <p className="mt-2"></p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Products products={[]} />
          <div className="p-4">
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="p-6">
                  <h2 className="text-lg font-bold text-gray-900">Product {index + 1}</h2>
                  <p className="text-gray-600">Product description</p>
                  <p className="text-gray-600">$100</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
