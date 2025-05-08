import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React from 'react';
import './globals.css';
import { NavMenu } from '@/components/NavMenu';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <NavMenu />
        {children}

        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Gaming Directory',
  description: 'Your guide to online gaming entertainment',
};
