import React from "react";

import Products from "@/components/Products";
import productData from "@/mock-data/data";
import CartContents from "@/components/CartContents";

const Page = async () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Products</h1>
      <div>
        <Products products={productData} />
        <CartContents date={Date.now().toString()} />
      </div>
    </>
  );
};

export default Page;
