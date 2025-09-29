"use client";
import React from "react";
import Image from "next/image";
import Menu from "./Menu";
import HeaderItems from "./HeaderItems";
import Currency from "../home/Currency";

const Header = () => {
  return (
    <>
      <div className="bg-[url('/h-bg.avif')] pb-2 h-[300px] flex   bg-cover bg-center shadow-[0_-10px_30px_rgba(16,45,106,0.32)_inset]">
        <div className="container mx-auto">
          <div className="flex justify-between flex-col  h-full w-full items-center">
            <HeaderItems />
            <div className=" flex items-center justify-center gap-3">
              <Image
                src={"/logo.png"}
                alt="the logo of website"
                width={60}
                height={60}
              />
              <span className="text-2xl font-bold text-gray-900">
                ART VERNISSAGE
              </span>
            </div>

            <Menu />
          </div>
        </div>
      </div>
      <Currency />
      <hr />
    </>
  );
};

export default Header;
