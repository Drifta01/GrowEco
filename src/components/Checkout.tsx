import React from "react";
import Link from "next/link";

import  ProductData from "@/mock-data/data";

const cartStorage = localStorage.getItem("cart");
const Cart = cartStorage ? JSON.parse(cartStorage) : [];

export const Storage = () => {
  const cartData = ProductData;
  const [cart, setCart] = React.useState(Cart);
  const [total, setTotal] = React.useState(0);
  const [shipping, setShipping] = React.useState(0);
  const [tax, setTax] = React.useState(0);
  const [grandTotal, setGrandTotal] = React.useState(0);
  React.useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce(
        (acc: any, item: { price: any }) => acc + item.price,
        0,
      );
      setTotal(total);
      setShipping(total * 0.1);
      setTax(total * 0.1);
      setGrandTotal(total + shipping + tax);
    };
    getTotal();
  }, [cart]);
  <div className="bg-white p-6 shadow-slate-">
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      <Link href="/cart/storage"></Link>
    </button>
  </div>;

  return (
    <div>
      <section className="container  grid-flow-col  grid-cols-3 my-1 pl-20  ">
        <Cart cart={cartData} />
      </section>
    </div>
  );
};
