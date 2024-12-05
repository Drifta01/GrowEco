import React from "react";
import { Product } from "@/mock-data/types";

export const About = ({ about }: { about: Product[] }) => {
  return (
    <>
      {about.map((about: Product) => (
        <div key={about.id} className="mb-4"></div>
      ))}
      <div className="bg-white p-6 rounded-lg shadow-lg shadow-slate-500 m-5">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>

        <p className="mt-2">{about[0].description}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg shadow-slate-500 m-5">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="mt-2">{about[0].description}</p>
      </div>
    </>
  );
};
