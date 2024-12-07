"use client";

import React from "react";
import Link from "next/link";

import { Product } from "@/mock-data/types";

export const Cart = ({ products }: { products: Product[] }) => {
  return (
    <>
      <section className="container mx-auto py-20 object-cover">
        <div>
          <p className="text-lg font-bold">Total:</p>
          <p className="text-lg font-bold">
            ${products.reduce((acc, item) => acc + item.price, 0)}
          </p>
        </div>

        <div className="flex space-x-3">
          <Link href="/checkout">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>
          </Link>
          <Link href="/">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Remove
            </button>
          </Link>
          <Link href="/checkout">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Buy
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Cart;
