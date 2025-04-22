import { Hero } from '@/components/Hero';
import { Header } from '@/components/Header';
import './globals.css';

export default async function Page() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return (
        <div>
            <Hero />
            <Header />

            <div className="flex flex-col items-center justify-center h-screen bg-gray-100"></div>
        </div>
    );
}
