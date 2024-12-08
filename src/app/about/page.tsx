import React from "react";

import About from "@/components/About";

const aboutPage = async () => {
  return (
    <>
      <section className="container mx-auto py-20 object-cover">
        <About />
      </section>
    </>
  );
};

export default aboutPage;
