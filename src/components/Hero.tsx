import Link from "next/link";

 export const Hero = () => {
  return (
    <>
    <section className="bg-green-200 object-fit: cover text-center py-10">
      <h2 className="text-9xl font-bold custom-font text-green-700">
        Grow Your Own Food
      </h2>
      <p className="text-2xl mt-4">
        High-quality garden and vegetable beds for your home
      </p>
      <button className="text-2xl mt-6 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800">
        <Link href="/products">Shop Now</Link>
      </button>
    </section>
    </>
  );
};
export default Hero;