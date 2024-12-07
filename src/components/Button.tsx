import React from "react";
import Link from "next/link";

const Button = ({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
    >
      {children}
    </Link>
  );
};
export default Button;
