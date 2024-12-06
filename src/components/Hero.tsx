import Link from "next/link";

export const Hero = () => {
  return (
    <section className="bg-green-200 text-center py-5">
      <h2 className="text-5xl font-bold custom-font text-green-700">
        Grow Your Own Food
      </h2>
      <p className="text-xl mt-4">
        High-quality garden and vegetable beds for your home
      </p>
      <button className="mt-6 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800">
        <Link href="/products">Shop Now</Link>
      </button>
    </section>
  );
};
