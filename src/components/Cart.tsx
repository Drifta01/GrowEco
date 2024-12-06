import React from "react";
import Link from "next/link";
import img from "next/image";
import { Product } from "@/mock-data/types";
import Hero from "@/components/Hero";

export const Cart = ({ cart }: { cart: Product[] }) => {
  return (
    <>
    <Hero />
      <section className="container grid-flow-col grid-cols-3 my-1 pl-20">
        <h1 className="text-6xl text-center font-bold mb-6">Cart</h1>
        {cart.map((item) => (
          <div key={item.id} className="bg-white p-6 shadow-slate-">
            <h4 className="text-2xl font-bold custom-font"> </h4>
            <div>
              <p className="text-lg font-bold">Price:</p>
              <p className="text-lg font-bold">${item.price}</p>
              <img
                src={item.image}
                alt={item.name}
                className="flex-auto object-contain w-60 h-60 rounded-lg"
                width={200}
                height={200}
              />
            </div>
          </div>
        ))}
        <div>
          <p className="text-lg font-bold">Total:</p>
          <p className="text-lg font-bold">
            ${cart.reduce((acc, item) => acc + item.price, 0)}
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
