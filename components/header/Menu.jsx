import { menuData } from "@/db/db";
import { IoLocationOutline } from "react-icons/io5";
const Menu = () => {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex justify-between gap-4">
        <IoLocationOutline className="text-black flex self-end mb-2" />
        <div className="flex items-start flex-col ">
          <span className="text-[#4f4f4f]  ">Deliver to</span>
          <h2 className="text-[#4f4f4f]  font-bold">Uzbekistan</h2>
        </div>
      </div>

      <ul className="flex gap-2 justify-between items-center">
        {menuData.map((item) => (
          <li
            key={item.id}
            className=" px-1 py-4 duration-300 hover:bg-white text-[#4f4f4f] text-sm cursor-pointer"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
