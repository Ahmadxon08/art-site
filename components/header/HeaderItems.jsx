import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import LanguageSelect from "./LanguageSelect";

const HeaderItems = () => {
  return (
    <div className="flex items-center justify-between w-full ">
      <div className=" flex items-center justify-center gap-2">
        <div className="flex items-center  border rounded-2xl py-1 px-3 text-[#6d6d6d] border-[#6d6d6d]">
          <input
            type="text"
            className="flex-1 border-none outline-none bg-transparent text-sm"
          />
          <AiOutlineSearch className="text-xl ml-1" />
        </div>
        <div className=" flex p-2 rounded-[50%] text-[#6d6d6d] cursor-pointer hover:text-white hover:bg-blue-900">
          <AiOutlineUser size={28} className=" text-inherit" />
        </div>{" "}
        <div className=" flex p-2 rounded-[50%] text-[#6d6d6d] cursor-pointer hover:text-white hover:bg-blue-900">
          <FaInstagram size={28} className=" text-inherit" />
        </div>{" "}
        <div className=" flex p-2 rounded-[50%] text-[#6d6d6d] cursor-pointer hover:text-white hover:bg-blue-900">
          <FaTelegram size={28} className=" text-inherit" />
        </div>{" "}
        <div className=" flex p-2 rounded-[50%] text-[#6d6d6d] cursor-pointer hover:text-white hover:bg-blue-900">
          <FaYoutube size={28} className=" text-inherit" />
        </div>{" "}
      </div>
      <LanguageSelect />
    </div>
  );
};

export default HeaderItems;
