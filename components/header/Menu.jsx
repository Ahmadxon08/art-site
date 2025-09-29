"use client";
import { menuData } from "@/db/db";
import { IoLocationOutline } from "react-icons/io5";
const Menu = () => {
  return (
    <div className="flex justify-between w-full  items-center">
      <div className="flex justify-between gap-4">
        <IoLocationOutline className="text-black flex self-end mb-2" />
        <div className="flex items-start flex-col ">
          <span className="text-[#4f4f4f]  ">Deliver to</span>
          <h2 className="text-[#4f4f4f]  font-bold">Uzbekistan</h2>
        </div>
      </div>

      <ul className="flex gap-2 justify-between items-center relative">
        {menuData.map((item) => (
          <li
            key={item.id}
            className="relative px-1 py-4 duration-300 hover:bg-white text-[#4f4f4f] text-sm cursor-pointer group"
          >
            {item.label}

            {item.children && (
              <ul className="absolute left-0  top-full  w-[200px] bg-white px-3  shadow-lg opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-300 z-10">
                {item.children.map((child) => (
                  <li
                    key={child.id}
                    className="text-[16px] cursor-pointer py-3 border-b border-gray-200 "
                  >
                    {child.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
