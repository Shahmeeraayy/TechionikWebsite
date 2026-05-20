"use client";

import { useState } from "react";

interface DropDownProps {
  options?: string[];
  placeholder?: string;
  onSelect: (value: string) => void;
}

const DropDown = ({ options = [], placeholder = "Select", onSelect }: DropDownProps) => {
  const [selected, setSelected] = useState("");

  const handleChange = (val: string) => {
    setSelected(val);
    onSelect(val);
  };

  return (
    <div className="relative w-[80%] my-5">
      <select
        className="bg-[#FFFFFF12] text-white pl-3 pr-10 w-full py-3 rounded-xl outline-none appearance-none hover:border-l-2 hover:border-orange-500 transition-all cursor-pointer"
        value={selected}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="" className="text-black">
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-black">
            {opt}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default DropDown;