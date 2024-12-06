import React from "react";

import { Contact } from "@/components/Contact";

const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
    <section className="container mx-auto py-20 object-cover">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg
      :p-8">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-gray-700">We are here to help you. Please feel free to contact us.</p>
        </div>
        </section>
    <section className="container mx-auto py-20 object-cover">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg
      :p-8">
        <Contact />
        </div>
        </section>
        </>
  );
}
export default Page;
