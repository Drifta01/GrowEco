import { Button } from "./Button";
import { Product } from "@/types";

export const ProductCard = ({ products }: { products: Product[] }) => {
  return (
    <>
      {products?.map((product) => (
        <div
          key={product.name}
          className="bg-white p-6 rounded-lg shadow-lg shadow-slate-500 m-5"
        >
          <h4 className="text-2xl font-bold custom-font mt-4">
            {product.name}
          </h4>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover mt-4"
          ></img>
          <p className="mt-2">{product.description}</p>
          <p className="mt-4 text-green-700 font-bold">{product.price}</p>
          <Button>Add to Cart</Button>
        </div>
      ))}
    </>
  );
};
