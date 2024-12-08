"use client";
import React from "react";

import { CartItem, useCart } from "@/context/cartContext";
import { Product } from "@/mock-data/types";

const Cart = () => {
  const { state, dispatch } = useCart();

  const removeItemFromCart = (product: Product) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id: product.id, product, quantity: 0 },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div>
      <h1>Cart</h1>

      <button onClick={clearCart}>Clear Cart</button>
      <ul>
        {state.items.map((item) => (
          <li key={item.product.id}>
            {item.product.name} - ${item.product.price} x {item.quantity}
            <button onClick={() => removeItemFromCart(item.product)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
