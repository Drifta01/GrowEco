import React from "react";
import { Product } from "@/mock-data/types";
import Link from "next/link";

export const Cart = ({ cart }: { cart: Product[] }) => {
  return (
    <>
      <section className="container grid-flow-col grid-cols-3 my-1 pl-20">
        <div className="container mx-auto py-20">
          <h1 className="text-6xl text-center font-bold mb-6">Cart</h1>
          {cart.map((item) => (
            <div key={item.id} className="bg-white p-6 shadow-slate-">
              <h4 className="text-2xl font-bold custom-font"> </h4>
              <div className="flex justify-between items-center mt-4">
                <p className="text-lg font-bold">Price:</p>
                <p className="text-lg font-bold">${item.price}</p>
                <img
                  src={item.image}
                  alt={item.name}
                  className="flex-auto object-contain w-60 h-60 rounded-lg"
                />
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-bold">Total:</p>
            <p className="text-lg font-bold">
              ${cart.reduce((acc, item) => acc + item.price, 0)}
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <Link href="/checkout"></Link>
            <div className="mt-20">
              <Link href="/checkout">
                <div className="grid-flow-col-dense">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold m-3 py-2 px-4 rounded">
                    Checkout
                  </button>
                </div>
              </Link>
              <Link href="/">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 m-3 px-4 rounded">
                  Remove
                </button>
              </Link>
              <Link href="/checkout">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-4 rounded">
                  Buy
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
