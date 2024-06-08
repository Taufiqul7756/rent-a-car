"use client";

import React, { useState, useRef } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Dropdown = ({ value, options, onChange, renderOption, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="w-full text-sm px-3 py-2 border rounded-lg cursor-pointer focus:outline-none focus:border-indigo-500 flex justify-between items-center"
        onClick={toggleDropdown}
      >
        {value ? renderOption(value) : placeholder}
        <span className="ml-2 text-2xl">
          {isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        </span>
      </div>
      {isOpen && (
        <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
          {options.map((option) => (
            <div
              key={option.id}
              className="px-3 py-2 cursor-pointer hover:bg-indigo-100"
              onClick={() => handleOptionClick(option)}
            >
              {renderOption(option)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
