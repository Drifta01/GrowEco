
import React from "react";
import {Header} from "@/components/Header"
import {Footer} from "@/components/Footer"
import {Hero} from '@/components/Hero'

import "./globals.css"
 



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Hero />

      

        <div>{children}</div>
      <Footer />
      </body>
    </html>
  );

}
