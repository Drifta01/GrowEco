import React from "react";

import { Cart } from "@/components/Cart";
import productData from "@/mock-data/data";
import CartContents from "@/components/CartContents";

const CartPage = async () => {
  return (
    <>
      <section className="container mx-auto py-20 object-cover">
        <Cart products={productData} />
        <CartContents date={""}  />
      </section>
    </>
  );
};
export default CartPage;
