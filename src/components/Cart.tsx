
import { Product } from "@/types";

export const CartItems = ({ items }: { items: Product[] }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.name} className="bg-white p-6 shadow-slate-500 m-5">
          <h4 className="text-2xl font-bold custom-font">{item.name}</h4>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover mt-4"
          ></img>
          <p className="text-2xl font-bold custom-font">{item.id}</p>
          <p className="mt-2">{item.name}</p>
          <p className="mt-2">{item.description}</p>

          <p className="mt-4 text-green-700 font-bold">{item.price}</p>
        </div>
      ))}
    </>
  );
};
