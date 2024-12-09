import React from "react";
import Contact from "@/components/Contact";

const Page = async () => {
  await import("react");
  return (
    <span className="container mx-auto py-20 object-cover">
      <Contact />
    </span>
  );
};
export default Page;
