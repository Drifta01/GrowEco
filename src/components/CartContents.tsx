"use client";
import React from "react";
import { useCart } from "@/hooks/use-cart";

export default function CartContents({}: { date: string }) {
  const { cart, getAllItems } = useCart();
  const items = getAllItems();
  console.log(...cart);

  return (
    <>
      <section className="container mx-auto py-20 object-cover">
        {cart?.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-b"
          >
            <div className="flex items-center">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.product.name}</h2>
                <p className="text-gray-600">{item.product.description}</p>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold">${item.product.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total:</p>
          <p className="text-lg font-bold">
            $
            {getAllItems()?.reduce(
              (acc, item) => acc + item.product.price * item.quantity,
              0,
            )}
          </p>
        </div>
      </section>
    </>
  );
}
