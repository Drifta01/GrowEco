import React from "react";

import Cart from "@/components/Cart";
import productData from "@/mock-data/data";

const CartPage = async () => {
  return (
    <>
      <section className="container mx-auto py-20 object-cover">
        <Cart />
      </section>
    </>
  );
};
export default CartPage;
