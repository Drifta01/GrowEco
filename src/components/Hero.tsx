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
        <Link href="/products">
          <button className="bg-green-700 text-white font-bold py-2 px-4 rounded">
            Shop Now
          </button>
        </Link>
      </section>
    </>
  );
};
export default Hero;
