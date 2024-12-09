import React from "react";
import Link from "next/link";

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
}: {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}) => {
  const buttonSize =
    size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-md";
  const variantColor =
    variant === "primary"
      ? "bg-green-700 hover:bg-green-800"
      : "bg-slate-700 hover:bg-slate-800";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`mt-4 px-4 py-2  text-white rounded ${variantColor} ${buttonSize}`}
    >
      {children}
    </Link>
  );
};
