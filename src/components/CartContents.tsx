"use client";
import React from "react";

import { Product } from "@/mock-data/types";

export default function CartContents({
  items,
  handler,
}: {
  items: Product[];
  handler: any;
}) {
  const { cart, addItem } = useCart();

  const handleAddToCart = (product: Product) => {
    const item: CartItem = {
      id: product.id,
      quantity: 1,
      product,
      date: "",
    };
    addItem(item);
  };

  return (
    <>
      <section className="container mx-auto py-20 object-cover">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        {items.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-4 border-b"
          >
            <div className="flex items-center">
              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-700">{product.description}</p>
                <p className="text-green-700 font-bold">${product.price}</p>
              </div>
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>
      <section className="container mx-auto py-20 object-cover">
        <h2 className="text-2xl font-bold mb-6">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border-b"
            >
              <div className="flex items-center">
                <div>
                  <h2 className="text-lg font-semibold">{item.product.name}</h2>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                  <p className="text-green-700 font-bold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
}
