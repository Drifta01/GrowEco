import { Product } from "@/mock-data/types";
import { useState, useEffect } from "react";

export type CartItem = {
  id: string;
  quantity: number;
  product: Product;
  date: string;
};

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => {
    console.log(cart);
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);
  const addItem = (item: CartItem) => {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex === -1) {
      newCart.push(item);
    } else {
      newCart[itemIndex].quantity += 1;
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const removeItem = (id: string) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const getAllItems = () => {
    return cart;
  };
  return { cart: [...cart], addItem, removeItem, getAllItems, setCart };
};
