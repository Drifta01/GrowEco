import React from "react";
import Product from "@/mock-data/data";
import Link from "next/link";
import ProductData from "@/mock-data/data";
import image from "next/image";

const Products = ({
  products = ProductData,
}: {
  products: typeof ProductData;
}) => {
  return (
    <>
      <section className="container mx-auto py-20">
        <div className="flex flex-wrap justify-center">
          {products.map((products) => (
            <div key={products.id} className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://storage.googleapis.com/a1aa/image/pmaMHXZPqnagNZqRXneROa4cVqUIeLJ3JYaNc4oBjHi7RJ1TA.jpg"
                  alt="Wooden garden bed"
                  className="object-cover w-full h-64
                rounded-t-lg"
                  width={700}
                  height={475}
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold">{products.name}</h3>
                  <p className="mt-2"></p>
                  <p className="text-gray-600">${products.price}</p>
                  <Link href={"/"}>
                    <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      View Product
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default Products;
