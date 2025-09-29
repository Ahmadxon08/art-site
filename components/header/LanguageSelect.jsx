"use client";

import { useState } from "react";
import Image from "next/image";
import { languages } from "@/db/db";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const LanguageSelect = () => {
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative h-20  w-20">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full border border-gray-300 rounded-md px-3 py-2 bg-white hover:bg-gray-50"
      >
        <div className="flex items-center justify-between  w-full h-full gap-2">
          <Image
            src={selected.flag}
            alt={selected.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <MdOutlineKeyboardArrowDown color="#6d6d6d" />
        </div>
      </button>

      {open && (
        <div className="absolute w-full border border-gray-200 rounded-md bg-white shadow-lg z-10">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
            >
              <Image
                src={lang.flag}
                alt={lang.name}
                width={40}
                height={70}
                className="rounded-full"
              />
              <span className="text-[#6d6d6d]">{lang.code}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
