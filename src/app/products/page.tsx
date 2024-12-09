import React from "react";

import Products from "@/components/Products";
import productData from "@/mock-data/data";
import Cart from "@/components/Cart";

const Page = async () => {
  return (
    <div className="text-3xl font-bold text-center">
      <Products product={productData} />
      <Cart />
    </div>
  );
};

export default Page;
