import { cardDatas } from "@/db/db";
import Image from "next/image";
import Link from "next/link";

const ArtGallery = () => {
  return (
    <div className="grid grid-cols-1 container mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cardDatas.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-lg relative h-[300px] overflow-hidden shadow-md group"
        >
          <Image
            src={card.image}
            alt={card.title}
            width={300}
            height={300}
            className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-50"
          />

          <Link
            href={`/catalog/${card.id}`}
            className="absolute inset-0  bg-black bg-opacity-40  flex flex-col justify-between items-start text-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-00 z-10 p-3"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="flex items-start flex-col ">
              <p className="text-gray-300 text-sm">{card.details.genre}</p>
              <p className="text-gray-300 text-sm">{card.year}</p>
            </div>
            <p className="text-gray-200">{card.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArtGallery;
