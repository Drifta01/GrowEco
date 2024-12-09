import React from "react";

import Products from "@/components/Products";
import productData from "@/mock-data/data";

const Page = async () => {
  return (
    <span className="text-3xl font-bold text-center">
      <Products product={productData} />
    </span>
  );
};

export default Page;
