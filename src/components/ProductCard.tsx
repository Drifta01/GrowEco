import React from "react";
import Image from "next/image";

import { Product } from "../mock-data/types";

export const Products = ({ products }: { products: Product[] }) => {
  return (
    <>
      {products.map((product) => (
        <div
          key={product.name}
          className="grid-cols-3  bg-white p-6 rounded-lg shadow-lg shadow-slate-500 m-5"
        >
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-64 rounded-t-lg"

            width={400}
            height={400}
          />

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-
          4 rounded"
          ></button>
        </div>
      ))}
    </>
  );
};
