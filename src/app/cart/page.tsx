import React from "react";

import { productData } from "@/mock-data/data";
import { Cart } from "@/components/Cart";

const Page = async () => {
  const cartData = productData; // Define cartData

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <section className="container  grid-flow-col  grid-cols-3 my-1 pl-20  ">
        <Cart cart={cartData} />
      </section>
    </div>
  );
};
export default Page;
