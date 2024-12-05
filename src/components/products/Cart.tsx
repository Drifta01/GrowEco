import React from "react";
import { Product } from "../../mock-data/types";

export const Cart = ({ cart }: { cart: Product[] }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Your Cart</h1>
      {cart?.map((item) => (
        <div key={item.id} className="bg-white p-6 shadow-slate-500 m-5 rounded-lg shadow-lg">
          <h4 className="text-2xl font-bold custom-font">{item.name}</h4>
          <p className="mt-2">{item.description}</p>
          <p className="mt-4 text-green-700 font-bold">${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;