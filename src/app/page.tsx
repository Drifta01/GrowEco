'use client';
import Image from 'next/image';
import './globals.css';

export default function Home() {
  return (
    <div>
      <section className="py-6 bg-white">
        <h2 className="text-3xl text-center mb-0">Recommended Casinos</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="text-center bg-white p-2 shadow-lg rounded-lg">
            <Image
              src="/49024.jpg"
              alt="Casino 1"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h3 className="font-bold">Casino 1</h3>
            <button className="mt-4 bg-slate-600 text-white py-2 px-6 rounded-lg hover:bg-slate-400 transition duration-200">
              Play
            </button>
          </div>
          <div className="text-center bg-white p-2 shadow-lg rounded-lg">
            <Image
              src="/49024.jpg"
              alt="Casino 1"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h3 className="font-bold">Casino 1</h3>
            <button className="mt-4 bg-slate-600 text-white py-2 px-6 rounded-lg hover:bg-slate-400 transition duration-200">
              Play
            </button>
          </div>
          <div className="text-center bg-white p-2 shadow-lg rounded-lg">
            <Image
              src="/49024.jpg"
              alt="Casino 1"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h3 className="font-bold">Casino 1</h3>
            <button className="mt-4 bg-slate-600 text-white py-2 px-6 rounded-lg hover:bg-slate-400 transition duration-200">
              Play
            </button>
          </div>
          <div className="text-center bg-white p-2 shadow-lg rounded-lg">
            <Image
              src="/49024.jpg"
              alt="Casino 1"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h3 className="font-bold">Casino 1</h3>
            <button className="mt-4 bg-slate-600 text-white py-2 px-6 rounded-lg hover:bg-slate-400 transition duration-200">
              Play
            </button>
          </div>
          <div className="text-center bg-white p-2 shadow-lg rounded-lg">
            <Image
              src="/49024.jpg"
              alt="Casino 1"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h3 className="font-bold">Casino 1</h3>
            <button className="mt-4 bg-slate-600 text-white py-2 px-6 rounded-lg hover:bg-slate-400 transition duration-200">
              Play
            </button>
          </div>
          <div className="text-center bg-white p-2 shadow-lg rounded-lg">
            <Image
              src="/49024.jpg"
              alt="Casino 1"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <h3 className="font-bold">Casino 1</h3>
            <button className="mt-4 bg-slate-600 text-white py-2 px-6 rounded-lg hover:bg-slate-400 transition duration-200">
              Play
            </button>
            <p className="mt-2 text-sm text-gray-500">T&Cs Apply</p>
          </div>
        </div>
      </section>

      <section className="py-36 bg-gray-200"></section>
    </div>
  );
}
