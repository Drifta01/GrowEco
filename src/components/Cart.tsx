"use client";
import React from "react";

import { useCart } from "@/context/cartContext";
import { Product } from "@/mock-data/types";

const Cart = () => {
  const { state, dispatch } = useCart();

  const removeItemFromCart = (product: Product) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { product, quantity: 0 },
    });
  };

  function purchaseItem(product: Product): void {
    throw new Error("Function not implemented.");
  }

  function getTotalPrice(state: any): number {
    let totalPrice = 0;
    state.items.forEach((item: any) => {
      totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
  }

  // function addItemsToCart (state: CartState): React.ReactNode {
  //   throw new Error("Function not implemented.");
  // }

  return (
    <div className="flex justify-between">
      <div className="container mx-auto">
        <div className="flex justify-between"></div>
        <ul>
          {state.items.map((item) => (
            <li key={item.product.id}>
              {item.product.name}${item.product.price}
              Quantity: {item.quantity}
              <p className="flex justify-start text-lg font-semibold rounded-lg bg-blue-500 size-20 w-20   ">
                <button onClick={() => removeItemFromCart(item.product)}>
                  Remove Item
                </button>
              </p>
              {/* <button onClick={() => purchaseItem(item.product)}> */}
              {/* </button> */}
            </li>
          ))}
        </ul>

        <p>Total: {getTotalPrice(state)}</p>

      </div>
    </div>
  );
};
export default Cart;
