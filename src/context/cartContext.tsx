"use client";
import { Product } from "@/mock-data/types";
import React, { createContext, useContext, useReducer, ReactNode } from "react";

export type CartItem = {
  quantity: ReactNode;
  product: Product;
};

export type CartState = {
  totalPrice: ReactNode;
  items: CartItem[];
};

export type CartAction = {
  type:
    | "ADD_ITEM"
    | "REMOVE_ITEM"
    | "CLEAR_CART"
    | "PURCHASE_ITEM"
    | "GET_TOTAL_PRICE";
  payload?: CartItem;
};

const CartContext = createContext<
  { state: CartState; dispatch: React.Dispatch<CartAction> } | undefined
>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      if (action.payload) {
        const existingItem = state.items.find(
          (item) => item.product.id === action.payload!.product.id,
        );
        if (existingItem) {
          return {
            ...state,
            items: state.items.map((item) =>
              item.product.id === action.payload!.product.id
                ? { ...item, quantity: (item.quantity as number) + 1 }
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
          items: state.items.filter(
            (item) => item.product.id !== action.payload!.product.id,
          ),
        };
      }
      return state;
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
    case "GET_TOTAL_PRICE":
      const totalPrice = state.items.reduce(
        (total, item) =>
          total +
          item.product.price *
            (typeof item.quantity === "number" ? item.quantity : 0),
        0,
      );
      return {
        ...state,
        totalPrice,
      };
  }
};

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    totalPrice: 0,
    items: [],
  });

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
