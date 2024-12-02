import React from "react";


<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
export default function Home() {
  return (
    <div>
      {/* Header */}
      <header className="bg-green-700 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold custom-font">GrowEco</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a className="hover:underline" href="#">
             
                </a>
              </li>


              </ul>
            <ul className="flex space-x-4">
              <li>
                <a className="hover:underline" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Products
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="bg-green-200 text-center py-20">
        <h2 className="text-5xl font-bold custom-font text-green-700">
          Grow Your Own Food
        </h2>
        <p className="text-xl mt-4">
          High-quality garden and vegetable beds for your home
        </p>
        <button className="mt-6 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800">
          Shop Now
        </button>
      </section>
      {/* Products Section */}
      <section className="container mx-auto py-20">
        <h3 className="text-4xl font-bold text-center custom-font text-green-700 mb-10">
          Our Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Product 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold custom-font mt-4">
              Wooden Garden Bed
            </h4>
            <p className="mt-2">
              High-quality wooden garden bed perfect for growing vegetables and
              flowers.
            </p>
            <p className="mt-4 text-green-700 font-bold">$99.99</p>
            <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
              Add to Cart
            </button>
          </div>
          {/* Product 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold custom-font mt-4">
              Metal Garden Bed
            </h4>
            <p className="mt-2">
              Durable metal garden bed designed for long-lasting use.
            </p>
            <p className="mt-4 text-green-700 font-bold">$129.99</p>
            <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
              Add to Cart
            </button>
          </div>
          {/* Product 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-bold custom-font mt-4">
              Raised Garden Bed
            </h4>
            <p className="mt-2">
              Elevated garden bed for easy access and better soil drainage.
            </p>
            <p className="mt-4 text-green-700 font-bold">$149.99</p>
            <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-green-700 text-white p-4">
        <div className="container mx-auto text-center">
          <p>© 2023 GrowEco. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
