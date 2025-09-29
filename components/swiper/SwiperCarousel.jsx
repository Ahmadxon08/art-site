"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";
import { useRef } from "react";
import { FaRegHeart } from "react-icons/fa";

const SwiperCarousel = ({ cards }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="w-full max-w-xs bg-white shadow-lg overflow-hidden">
              <div className="max-w-xs  overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={500}
                  className="w-full h-[300px] object-cover "
                />
              </div>
              <div className="flexs p-1 justify-between flex-col">
                <div className="flex flex-col mb-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {card.title}{" "}
                  </h2>
                  <span className="text-[16px] text-[#6d6d6d]">
                    {card.year} year
                  </span>
                </div>
                <div className="flex items-center gap-2 text-black">
                  <HiOutlineLocationMarker color="000" size={28} />
                  <span className="text-[17px] text-gray-800">
                    {card.location}
                  </span>
                </div>
                <div className="flex items-center pr-1 mt-4 justify-between">
                  <Link href={`/catalog/${card.id}`}>
                    <button className=" px-1 cursor-pointer py-2 border hover:underline  text-[#000]  text-[16px]">
                      Read more
                    </button>
                  </Link>
                  <FaRegHeart className="text-blue-900" size={30} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div
          ref={prevRef}
          className="bg-white text-[#6d6d6d] p-2 px-4 rounded-[50%] absolute -left-3 top-1/2 -translate-y-1/2 cursor-pointer flex items-center justify-center z-10"
        >
          &#10094;
        </div>
        <div
          ref={nextRef}
          className="bg-white text-[#6d6d6d] p-2 px-4 rounded-[50%] absolute -right-3 top-1/2 -translate-y-1/2 cursor-pointer flex items-center justify-center z-10"
        >
          &#10095;
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
