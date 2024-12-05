import React from "react";

import { productData } from "@/mock-data/data";
import { Cart } from "../../components/products/Cart";

const Page = async () => {
  // await for  1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <section className="container mx-auto py-20">
      <h3 className="text-4xl font-bold text-center mb-10">Cart</h3>
      <Cart cart={productData} />
    </section>
  );
};
export default Page;
