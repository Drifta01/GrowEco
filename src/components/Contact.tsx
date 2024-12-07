import React from "react";
import image from "next/image";
import ProductData from "@/mock-data/data";

export const Contact = () => {
  return (
    <>
      <div className="container mx-auto p-6">
        <form className="bg-white p-6 rounded-lg shadow-lg shadow-slate-500">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>

          <img
            src="https://img.icons8.com/ios/50/000000/name.png"
            width={50}
            height={50}
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
            rows={5}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
