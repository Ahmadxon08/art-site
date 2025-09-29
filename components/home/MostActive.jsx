import React from "react";
import SwiperCarousel from "../swiper/SwiperCarousel";
import { cards } from "@/db/db";

const MostActive = () => {
  return (
    <div className="container mt-9 mb-9 mx-auto">
      <div className="w-full">
        <div
          className="flex items-center justify-between w-full  mb-3
          "
        >
          <h2 className="text-3xl font-bold text-[#000]">Most active</h2>
          <a href="#" className="text-[#6d6d6d] text-sm hover:underline">
            View all arts
          </a>
        </div>
        <SwiperCarousel cards={cards} />
      </div>
    </div>
  );
};

export default MostActive;
