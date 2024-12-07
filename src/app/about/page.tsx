import React from "react";

import AboutComponent from "@/components/About";

import "next/types";
import productData from "@/mock-data/data";

const about = productData;

const About = async () => {
  return (
    <>
      <section className="container mx-auto py-20 object-cover">
        <AboutComponent />
      </section>
    </>
  );
};

export default About;
