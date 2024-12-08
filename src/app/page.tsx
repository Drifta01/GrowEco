"use clent";
import React from "react";
import { Hero } from "@/components/Hero";
import Button from "../components/forms/Button";

import Link from "next/link";

const Page = () => {
  return (
    <>
      <Hero />

      <section className="container py-20 object-cover">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8"></div>
        <Link href="/product"></Link>
        <Button children={""} href={"/"} />
        <img
          src="https://storage.googleapis.com/a1aa/image/pmaMHXZPqnagNZqRXneROa4cVqUIeLJ3JYaNc4oBjHi7RJ1TA.jpg"
          className="flex-auto object-contain w-60 h-60 rounded-lg"
          width={200}
          height={200}
        />
      </section>
    </>
  );
};
export default Page;
