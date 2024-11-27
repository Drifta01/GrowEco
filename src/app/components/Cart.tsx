import React from "react";

export const Cart = () => {
  return (
    <section className="container mx-auto py-20">
      <h3 className="text-4xl font-bold text-center mb-10">Your Cart</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Cart items go here */}
      </div>
    </section>
  );
};