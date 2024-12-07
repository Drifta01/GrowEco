"use client";
import React from "react";
import { Product } from "@/mock-data/types";
import Button from "./Button";
import { CartItem, useCart } from "@/hooks/use-cart";

const Products = ({ products }: { products: Product[] }) => {
  const { setCart, addItem } = useCart();
  const addToCart = (product: Product) => {
    const item: CartItem = {
      id: product.id,
      product,
      quantity: 1,
      date: ""
    };

    addItem(item);
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
          <Button onClick={() => addToCart(product)} href="#">
            Add To Cart
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Products;
