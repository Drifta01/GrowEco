"use client";
import { CartContext, useCart } from "@/context/cartContext";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
const Header = () => {
  const { state, dispatch } = useCart();

  // useEffect(() => {
  //   dispatch({
  //     type: "GET_TOTAL_PRICE",
  //     payload: { quantity: 0 },
  //   });
  //  [state.items])
  // }
  //  ;

  return (
    <header className="bg-green-700 text-white p-4 w-full  shadow-green-700 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-6xl font-bold m-3 py-3 ">GrowEco</h1>
        <nav>
          <ul className="flex space-x-8 ">
            <li>
              <Link className="hover:underline text-3xl" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline text-3xl" href="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="hover:underline text-3xl" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline text-3xl" href="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="hover:underline text-3xl" href="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
        {/* {state.totalPrice} */}
      </div>
    </header>
  );
};

export default Header;
