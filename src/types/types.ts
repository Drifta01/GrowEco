import { ReactNode } from "react";

export type Game = {
  email: ReactNode;
  phone: ReactNode;
  address: ReactNode;
  city: ReactNode;
  state: ReactNode;
  zip: ReactNode;
  country: ReactNode;
  website: ReactNode;
  facebook: ReactNode;
  twitter: ReactNode;
  instagram: ReactNode;
  youtube: ReactNode;

  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  item: string;
  contacts: string;
  about: string;
  draw: string;
  game: string;
  gameId: string;
  matches: {
    team1: number;
    team2: number;
    draw?: number | string; // Accept both number and string (though we'll handle strings)
  };
}






