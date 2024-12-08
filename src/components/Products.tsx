"use client";
import React, { useState } from "react";
import { Product } from "@/mock-data/types";
import Button from "./Button";

import { CartItem, useCart } from "@/context/cartContext";

const Products = ({ products }: { products: Product[] }) => {
  const { state, dispatch } = useCart();

  const addItemToCart = (product: Product) => {
    const payload: CartItem = {
      id: "1",

      quantity: 1,
      product,
    };
    dispatch({ type: "ADD_ITEM", payload });
  };

  return (
    <div className="flex">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 m-2 border rounded shadow max-w-72 flex gap-4 flex-col "
        >
          <h2 className="text-xl font-bold">{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p className="text-lg font-semibold">${product.price}</p>

          <Button onClick={() => addItemToCart(product)} href="#">
            Add To Cart
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Products;
