import { ReactNode } from "react";

export type Games = {
  email: ReactNode;
  phone: ReactNode;
  address: ReactNode;

  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  item: string;
  contacts: string;
  about: string;
};
