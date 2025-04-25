import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import './globals.css';
import { NavBar } from '@/components/NavBar';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <NavBar />

                <div>{children}</div>

                <Footer />
            </body>
        </html>
    );
}
