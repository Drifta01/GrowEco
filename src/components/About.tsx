import React from "react";

import Hero from "@/components/Hero";

export default function About() {
  return (
    <>
      <Hero />
      <section className="container mx-auto py-20 object-cover">
        <div
          className="container mx-auto p-4 pt-6 md:p-6 lg:p
      -6 xl:p-6 2xl:p-6"
        >
          <div
            className="flex flex-col items-center justify-center p-4 md:p-6 lg
        :p-6 xl:p-6 2xl:p-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis
              natoque penatibus et magnis dis parturient montes, n ascetur
              ridiculus mus. Integer posuere erat a ante venenatis dapibus.
              Aliquam erat volutpat. Donec rutrum congue leo eget malesuada. Cum
              soci is natoque penatibus et magnis dis parturient montes, nasc
              eetur ridiculus mus.
            </p>
          </div>
          <div
            className="flex flex-col items-center justify-center p-4 md:p-6 lg
            :p-6 xl:p-6 2xl:p-6"
          ></div>
        </div>
      </section>
    </>
  );
}
