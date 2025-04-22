import React from 'react';


export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800">
      {children}
    </button>
  );
};
