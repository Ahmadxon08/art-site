import { cards } from "@/db/db";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiStorkDelivery } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const CardDeteilPage = async ({ params }) => {
  const { id } = await params;
  const card = cards.find((c) => c.id === parseInt(id));
  if (!card) {
    return <div className="text-center mt-10">Card not found</div>;
  }
  return (
    <div className="container mx-auto bg-white  mt-9">
      <div className="flex items-center  gap-6 justify-start my-9 w-full">
        <Link
          href="/"
          className="flex items-center text-[18px] text-black gap-2"
        >
          <IoIosArrowRoundBack size={44} color="#6d6d6d" />
          <span>Back</span>
        </Link>
        <span className="text-[18px] text-gray-800">{card.title}</span>
      </div>
      <div className="flex items-start justify-start gap-5">
        <div className="w-[45%] h-[450px] relative flex">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-8 ">
          <h1 className="text-2xl text-[#6d6d6d]">{card.author}</h1>
          <div className="flex gap-4 text-gray-600 mt-2">
            <span>{card.year}</span>
            <div className="flex items-center">
              <HiOutlineLocationMarker size={20} />
              <span className="ml-1">{card.location}</span>
            </div>
          </div>
          <div className="gap-7 flex flex-col  items-start">
            <p className="mt-4 text-gray-700">{card.description}</p>
            <p className="mt-4 text-[16px] text-gray-700">
              {card.details.material}
            </p>
            <p className="mt-4 text-[16px] text-gray-700">
              Price: <br /> {card.price}
            </p>
          </div>
          <div className="flex flex-col mt-8 gap-7 ">
            <div className="flex gap-2  items-center">
              <button className="border flex cursor-pointer  gap-3 items-center justify-between p-1 border-gray-200">
                <span className="flex text-[14px] text-[#6d6d6d]">Save</span>
                <CiHeart className="text-blue-800" />
              </button>
              <button className="border flex  cursor-pointer gap-3 items-center justify-between p-1 border-gray-200">
                <span className="flex text-[14px] text-[#6d6d6d]">
                  Add to cart
                </span>{" "}
                <IoCartOutline className="text-blue-800" />
              </button>
            </div>
            <div className="flex gap-6 items-start pl-5 flex-col">
              <a href="#" className="flex gap-3 items-center">
                <div className="bg-blue-900 p-1 rounded-full text-white">
                  <GiStorkDelivery size={24} />
                </div>
                <span className="text-gray-700 text-[14px]">
                  Local Delivery
                </span>
              </a>
              <a href="#" className="flex gap-3 items-center">
                <div className="bg-blue-900 p-1 rounded-full text-white">
                  <TbTruckDelivery size={24} />
                </div>
                <span className="text-gray-700 text-[14px]">
                  International Delivery
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start flex-col mt-6 gap-3">
        <h2 className="text-black font-semibold">Details:</h2>

        <div className="flex flex-col pl-5  gap-4 items-start">
          <span className="text-gray-700   text-[16px]">
            Size (length/width): {card.details.size}
          </span>
          <span className="text-gray-700   text-[16px]">
            Sign (signature position): {card.details.sign}
          </span>
          <span className="text-gray-700   text-[16px]">
            Period: {card.details.period}
          </span>
          <span className="text-gray-700   text-[16px]">
            Material: {card.details.material}
          </span>
          <span className="text-gray-700   text-[16px]">
            Country: {card.details.country}
          </span>
          <span className="text-gray-700   text-[16px]">
            Course: {card.details.course}
          </span>
          <span className="text-gray-700   text-[16px]">
            Genre: {card.details.genre}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardDeteilPage;
