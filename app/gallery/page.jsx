import CollapsibleMenu from "@/components/CollapsibleMenu";
import { cards, genresData } from "@/db/db";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const GalleryPage = () => {
  return (
    <div className="flex container mx-auto justify-between">
      <div className="">
        <div className="flex items-center">
          <span>Filter</span>
          <span>Filter</span>
        </div>
        <CollapsibleMenu data={genresData} />
      </div>

      <div className="flex flex-col w-[60%] gap-3 justify-between items-start">
        {cards.map((card) => (
          <div
            className="flex justify-between gap-4 py-5  border-b items-center h-[300px] w-full"
            key={card.id}
          >
            <div className="flex w-[400]  h-full">
              <Image
                src={card.image}
                alt={card.author}
                width={500}
                height={300}
                className="w-inherit h-inherit"
              />
            </div>
            <div className="flex justify-between  h-full w-full">
              <div className="flex flex-col justify-between">
                <h2 className="text-gray-800 font-semibold">{card.title}</h2>
                <div className="flex items-center gap-2 text-black">
                  <HiOutlineLocationMarker className="text-gray-400 text-[18px]" />
                  <span className="text-[14px] text-gray-500 w-fit">
                    {card.location}
                  </span>
                </div>{" "}
              </div>
              <div className="flex flex-col w-full items-end pr-2 justify-between">
                <span className="text-[16px] text-gray-700">{card.lot}</span>
                <Link href={`/catalog/${card.id}`}>
                  <button className=" px-1 cursor-pointer py-2 border hover:underline  text-[#000]  text-[16px]">
                    Read more
                  </button>
                </Link>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
