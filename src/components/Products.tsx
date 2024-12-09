"use client";
import React from "react";
import { Product } from "@/mock-data/types";
import { CartItem, useCart } from "@/context/cartContext";


const Products = ({ product }: { product: Product[] }) => {
  const { dispatch } = useCart();

  const addItemToCart = (product: Product) => {
    const payload: CartItem = {
      quantity: 1,
      product,
    };
    dispatch({ type: "ADD_ITEM", payload });
  };

  return (
    <div className="flex">
      {product.map((product) => (
        <div
          key={product.id}
          className="p-4 m-2 border rounded shadow max-w-72 flex gap-4 flex-col "
        >
          <h2 className="text-xl font-bold">{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p className="text-lg font-semibold">${product.price}</p>

          <button onClick={() => addItemToCart(product)}>
            Add To Cart
          </button>
        </div>
      ))}
     <p>

      </p>
    </div>
  );
};

export default Products;
