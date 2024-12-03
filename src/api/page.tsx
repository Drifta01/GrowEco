import React from "react";
import { ProductCard } from "@/components/ProductCard";
import { productData } from "@/mock-data/data";

const product = [
  {
    id: 1,
    item: "Wooden Bed",
    name: "Wooden Garden Bed",
    description:
      "High-quality wooden garden bed perfect for growing vegetables and flowers.",
    price: 99.99,
    image:
      "https://storage.googleapis.com/a1aa/image/pmaMHXZPqnagNZqRXneROa4cVqUIeLJ3JYaNc4oBjHi7RJ1TA.jpg",
  },
  {
    id: 2,
    item: "Metal Bed",
    name: "Metal Garden Bed",
    description: "Durable metal garden bed designed for long-lasting use.",
    price: 129.99,
    image:
      "https://storage.googleapis.com/a1aa/image/STQnu6bHjnrMAdOYNRF2veJPK7TxnwktbwgDHA0Myfy5RJ1TA.jpg",
  },
  {
    item: "Raised Bed",
    id: 3,
    name: "Raised Garden Bed",
    description:
      "Elevated garden bed for easy access and better soil drainage.",
    price: 149.99,
    image:
      "https://storage.googleapis.com/a1aa/image/MJVbySE12p5lGBChExoBlfN8F3GJ8XfyOsDihhvfKel0HlUPB.jpg",
  },
];

const Products = async () => {
  return (
    <section className="container mx-auto py-20">
      <h3 className="text-4xl font-bold text-center mb-10">Our Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {product?.map((products, index) => (
          <ProductCard key={productData} product={productData} />
        ))}
      </div>
    </section>
  );
};

export default Products;
