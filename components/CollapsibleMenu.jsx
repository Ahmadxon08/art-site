"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const CollapsibleMenu = ({ data }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-64 p-2  border-gray-200 ">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-gray-700 text-xl">Genres</h1>
        <button
          className="text-1xl text-gray-700 border border-gray-500 py-2 px-2 rounded-full flex items-center justify-center cursor-pointer"
          onClick={toggleMenu}
        >
          <FaPlus />
        </button>
      </div>

      <div
        className={`overflow-y-auto py-2 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-100 transition-all duration-400 ${
          open ? "max-h-[200px]" : "max-h-0"
        }`}
      >
        <ul className="pl-5 list-disc">
          {data.map((item, index) => (
            <li
              key={index}
              className="py-1 text-gray-700 text-[14px] marker:text-red-500 hover:text-red-500 cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollapsibleMenu;
