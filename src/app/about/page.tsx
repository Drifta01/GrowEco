import React from "react";

import { productData } from "@/mock-data/data";
import { About } from "../../components/products/About";

const Page = async () => {
  // await for  1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <section className="container mx-auto py-20">
      <h3 className="text-4xl font-bold text-center mb-10">About Us</h3>
      <About about={productData} />
    </section>
  );
};
export default Page;
