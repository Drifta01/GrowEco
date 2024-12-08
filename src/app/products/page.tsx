import React from "react";

import product from "@/mock-data/data";
import Cart from "@/components/Cart";
import Products from "@/components/Products";
import productData from "@/mock-data/data";

const Page = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Products</h1>
      <div>
        <Products product={productData} />
        <Cart />
      </div>
    </>
  );
};

export default Page;
