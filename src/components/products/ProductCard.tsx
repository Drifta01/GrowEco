import React from "react";

import { Product } from "../../mock-data/types";

export const ProductCard = ({ products }: { products: Product[] }) => {
  return (
    <>

        {products.slice(1).map((product) => (
          <div
            key={product.name}
            className="grid-cols-3  bg-white p-6 rounded-lg shadow-lg shadow-slate-500 m-5"
          >
            <img
              src="https://storage.googleapis.com/a1aa/image/pmaMHXZPqnagNZqRXneROa4cVqUIeLJ3JYaNc4oBjHi7RJ1TA.jpg"
              alt="Wooden garden bed"
              className="object-cover w-full h-64 rounded-t-lg"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/pmaMHXZPqnagNZqRXneROa4cVqUIeLJ3JYaNc4oBjHi7RJ1TA.jpg"
              alt="Wooden garden bed"
              className="object-cover w-full h-64 rounded-t-lg"
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
