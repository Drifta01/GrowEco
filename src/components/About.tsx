import Link from "next/link";
import React from "react";

export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Learn more about our company.</p>
      <Link href="/products">Products</Link>
    </div>
  );
};
