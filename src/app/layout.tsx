import React from 'react';
import { MainLayout } from '@/components/MainLayout';
import { Footer } from '@/components/Footer';
import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased">
                <MainLayout>
                    {children}
            
                </MainLayout>
            </body>
        </html>
    );
}

export const metadata = {
    title: 'Gaming Directory',
    description: 'Your guide to online gaming entertainment',
};
