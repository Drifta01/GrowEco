import React from "react";

export const TextInput = ({
  name,
  label,
  type,
  value,
  height,
  onChange,
}: {
  name: string;
  label: string;
  type: string;
  value: string;
  height: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="text-sm mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        style={{ height }}
        className="border border-gray-300 rounded-md p-2"
      />
    </div>
  );
};
