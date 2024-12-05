import React from "react";

import { Product } from "../../mock-data/types";

export const Contact = ({ contact }: { contact: Product[] }) => {
  return (
    <>
      {contact.map((contacts) => (
        <div key={contacts.id}>
          <div className="bg-white p-6 rounded-lg shadow-lg shadow-slate-500 m-5">
            <h4 className="text-2xl font-bold custom-font">{contacts.name}</h4>
            <p className="mt-2">{contacts.email}</p>
            <p className="mt-2">{contacts.phone}</p>
            <p className="mt-2">{contacts.address}</p>
          </div>
        </div>
      ))}
    </>
  );
};
