import "../globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CartProvider } from "@/context/cartContext";
import React from "react";

const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <CartProvider>
          <div>{children}</div>
        </CartProvider>
      <Footer />
      </body>
    </html>
  );
}
