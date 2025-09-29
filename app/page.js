"use client";
import AppliedArt from "@/components/home/AppliedArt";
import ArtFine from "@/components/home/ArtFine";
import ArtGallery from "@/components/home/ArtGallery";
import HomeMenuItems from "@/components/home/HomeMenu";
import MostActive from "@/components/home/MostActive";
import Image from "next/image";
import React from "react";
import { TfiStatsDown } from "react-icons/tfi";
import { TfiStatsUp } from "react-icons/tfi";

const HomePage = () => {
  return (
    <>
      <div className="w-full  py-2">
        <div className="container mx-auto">
          <div className="flex items-center gap-7">
            <p className="text-[12px] font-semibold  text-[#6d6d6d]">
              {" "}
              Exchange rates of the Republic of Uzbekistan CB against 1 sum
              20.08.2022
            </p>
            <div className="flex items-center justify-center gap-5">
              <div className="flex items-center gap-2">
                <Image
                  src={"/usa.svg.webp"}
                  alt="ru"
                  width={20}
                  height={20}
                  className="rounded-full object-cover"
                />
                <span className="text-[12px]   text-[#6d6d6d]">
                  1 USD $ = 12138.67
                </span>
                <TfiStatsUp size={20} color="green" />
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={"/china.png"}
                  alt="ru"
                  width={20}
                  height={20}
                  className="rounded-full object-cover"
                />
                <span className="text-[12px]   text-[#6d6d6d]">
                  1 CNY ¥ = 1701.55
                </span>
                <TfiStatsDown size={20} color="red" />
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={"/ru.png"}
                  alt="ru"
                  width={20}
                  height={20}
                  className="rounded-full object-cover"
                />
                <span className="text-[12px]   text-[#6d6d6d]">
                  1 RUB ₽ = 145.36
                </span>
                <TfiStatsDown size={20} color="red" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArtGallery />
      <HomeMenuItems />
      <hr />
      <ArtFine />

      <hr />

      <AppliedArt />
      <hr />
      <MostActive />
    </>
  );
};

export default HomePage;
