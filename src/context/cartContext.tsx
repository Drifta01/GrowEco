"use client";
import { Product } from "@/mock-data/types";
import React, { createContext, useContext, useReducer, ReactNode } from "react";

export type CartItem = {

  id: string;

  quantity: number;
  product: Product;
}

export type CartState = {
  items: CartItem[];
}

export type CartAction = {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "CLEAR_CART";
  payload?: CartItem;
}

const CartContext = createContext<
  { state: CartState; dispatch: React.Dispatch<CartAction> } | undefined
>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      if (action.payload) {
        const existingItem = state.items.find(
          (item) => item.id === action.payload!.id,
        );
        if (existingItem) {
          return {
            ...state,
            items: state.items.map((item) =>
              item.id === action.payload!.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          };
        }
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
      return state;
    case "REMOVE_ITEM":
      if (action.payload) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload!.id),
        };
      }
      return state;
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
};

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart, CartContext, cartReducer };
