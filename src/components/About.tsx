import React from "react";
import { Product } from "@/mock-data/types";
import img from "next/image";

export const About = ({ about }: { about: Product[] }) => {
  return (
    <>
      {about.map((about: Product) => (
        <div key={about.id} className="mb-4"></div>
      ))}
      <p className="text-2xl font-bold text-green-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut, sit
        ipsum ab provident ea? Possimus saepe voluptatibus officia quam quidem
        nostrum sapiente facilis eligendi, ratione commodi libero inventore
        ipsum!
      </p>
      <p className="text-2xl font-bold text-green-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut, sit
        ipsum ab provident ea?
      </p>
      <img
        src="https://storage.googleapis.com/a1aa/image/pmaMHXZPqnagNZqRXneROa4cVqUIeLJ3JYaNc4oBjHi7RJ1TA.jpg"
        alt="Wooden garden bed"
        className="object-cover w-full h-64 rounded-t-lg"
        width={700}
        height={475}
      />
    </>
  );
};
