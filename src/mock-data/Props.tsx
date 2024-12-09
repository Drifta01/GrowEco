import React, { useState } from "react";

interface Props {
  label?: string;
  className?: string;
  onToggle?: (isOn: boolean) => void;
}

const Toggle: React.FC<Props> = ({ label, className, onToggle }) => {
  const [isOn, setIsOn] = useState(false);
  const handleDarkModeToggle = () => {
    setIsOn(!isOn);
    if (onToggle) {
      onToggle(!isOn);
    }
  };
  return (
    <div
      className={`relative inline-block ${className}`}
      onClick={handleDarkModeToggle}
    >
      <div
        className={`bg-gray-300 rounded-full w-12 h-6 transition duration-300 ease-in-out ${isOn ? "bg-blue-500" : ""}`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform ${isOn ? "translate-x-6" : ""}`}
        ></div>
      </div>
      <span className="ml-2">{label}</span>
    </div>
  );
};
