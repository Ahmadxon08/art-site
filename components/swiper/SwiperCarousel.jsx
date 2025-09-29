"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // ✅ to‘g‘ri
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FcLike } from "react-icons/fc";
import { cards } from "@/db/db";
import Link from "next/link";

const SwiperCarousel = () => {
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="w-full max-w-xs bg-white shadow-lg overflow-hidden">
              <div className="max-w-xs  overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={300}
                  className="w-full h-[200px] object-cover "
                />
              </div>
              <div className="flexs p-1 justify-between flex-col">
                <div className="">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {card.title}{" "}
                  </h2>
                  <span>{card.year}</span>
                </div>
                <div className="flex text-black">
                  <HiOutlineLocationMarker color="000" size={28} />
                  <span>{card.location}</span>
                </div>
                <div className="flex items-center mt-4 justify-between">
                  <Link href={`/${card.id}`}>
                    <button className=" px-1 py-2 border hover:underline  text-[#000]  text-[16px]">
                      Read more
                    </button>
                  </Link>
                  <FcLike className="text-white" size={30} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
