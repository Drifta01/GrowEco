import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Learn more about our company.</p>
      <Link to="/products">Products</Link>
    </div>
  );
};
