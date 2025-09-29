"use client";
import SwiperCarousel from "@/components/swiper/SwiperCarousel";
import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <p>Yuqoridagi matn</p>
      <hr />
      <p>Pastdagi matn</p>
      <div className="w-full">
        <div
          className="flex items-center justify-between w-full  mb-3
        "
        >
          <h2 className="text-3xl font-bold text-[#000]">Fine art</h2>
          <a href="#" className="text-[#6d6d6d] text-sm hover:underline">
            View all arts
          </a>
        </div>
        <SwiperCarousel />
      </div>
    </div>
  );
};

export default HomePage;
