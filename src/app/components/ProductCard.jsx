import React from 'react';
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h4 className="text-2xl font-bold mt-4">{product.name}</h4>
      <p className="mt-2">{product.description}</p>
      <p className="mt-4 text-green-700 font-bold">${product.price}</p>
      <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">Add to Cart</button>
    </div>
  );
};

export default ProductCard;