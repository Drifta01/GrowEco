import React from "react";

import { Contact } from "@/components/products/Contact";

const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <Contact />
    </>
  );
};

export default Page;
