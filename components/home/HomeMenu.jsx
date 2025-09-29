import { categories, genres } from "@/db/db";
import React from "react";
import { GiPorcelainVase } from "react-icons/gi";

const HomeMenuItems = () => {
  return (
    <div className="container flex items-start mb-12 mt-12 gap-5 mx-auto">
      <div className="relative group flex text-[12px] pl-2 w-[200px] items-center justify-start gap-2 border border-blue-800 hover:border-red-500 text-blue-800 hover:text-red-500 border-dashed py-3">
        <GiPorcelainVase size={26} className="text-inherit" />
        <span className="text-inherit uppercase">Art Fine</span>

        <div className="absolute left-0  top-full border-red-500  text-blue-800 hover:text-red-500 border-dashed w-[300px] bg-white border  shadow-lg opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-300 z-10">
          <ul className="px-4 pl-6 list-disc">
            {genres.map((genre) => (
              <li
                key={genre.id}
                className="text-[13px] py-3  cursor-pointer border-b border-gray-200 text-blue-800 hover:text-red-500 marker:text-red-500"
              >
                {genre.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative group flex text-[12px] pl-2 w-[200px] items-center justify-start gap-2 border border-blue-800 hover:border-red-500 text-blue-800 hover:text-red-500 border-dashed py-3">
        <GiPorcelainVase size={26} className="text-inherit" />
        <span className="text-inherit uppercase">Applied Art</span>

        <div className="absolute left-0  top-full border-red-500  text-blue-800 hover:text-red-500 border-dashed w-[500px] bg-white border  shadow-lg opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-300 z-10">
          <ul className="px-4 pl-6 list-disc">
            {categories.map((genre) => (
              <li
                key={genre.id}
                className="text-[13px] cursor-pointer py-3 border-b border-gray-200 text-blue-800 hover:text-red-500 marker:text-red-500"
              >
                {genre.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeMenuItems;
