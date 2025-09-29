import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div>
      <div className=" flex bg-black justify-between items-center">
        <div className="container mx-auto">
          <div className="flex w-full px-9 h-full justify-between py-4 items-center">
            <div className="">
              <h2 className="font-bold text-2xl">Subscribe to us </h2>
              <span className="text-xl">
                {" "}
                and stay tuned for the latest news
              </span>{" "}
            </div>
            <div className=" flex justify-between gap-5 items-center">
              <a href="#">
                <FaInstagram size={50} />
              </a>
              <a href="#">
                <FaTelegram size={50} />
              </a>
              <a href="#">
                <FaYoutube size={50} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-center w-full">
        <div className="bg-[url('/f-bg.webp')] flex justify-center items-center  w-[50%] h-[450px]">
          <div className="flex  w-[50%]  justify-between pb-16  mx-auto items-start">
            <div className="flex items-start w-full  gap-3 flex-col">
              <a href="" className="text-[#000] hover:underline">
                Artists{" "}
              </a>
              <a href="" className="text-[#000] hover:underline">
                Blog
              </a>
            </div>
            <div className="flex items-start gap-3 flex-col">
              <a href="" className="text-[#000] hover:underline">
                Types of fine art{" "}
              </a>
              <a href="" className="text-[#000] hover:underline">
                Applied art types
              </a>
              <a href="" className="text-[#000] hover:underline">
                Experts
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[url('/f-bg1.webp')] flex justify-center items-center pl-[60px]   w-[50%]  h-[450px]">
          {" "}
          <div className="flex items-start flex-col gap-4 flex-coljustify-between">
            <div className=" flex gap-2 items-center">
              <CgMail size={28} />
              <span>info@art-v.uz</span>
            </div>
            <div className="flex items-start gap-2">
              <BiSolidPhoneCall size={28} />
              <div className=" flex flex-col">
                <span>+998 55 515 17 07 </span>
                <span>+998 71 203 17 07 </span>
                <span>+998 55 514 12 12 </span>
              </div>{" "}
            </div>
            <div className="flex items-start gap-2">
              <HiOutlineLocationMarker size={28} />
              <div className=" flex flex-col gap-2">
                <span className="mb-3">Address</span>
                <span className="text-[18px]">
                  1.Publishing house Art Vernissage 35, <br /> Sadyk Azimov
                  str., Mirzo Ulugbek district, 100000, Tashkent, Uzbekistan
                </span>
                <span className="text-[18px]">
                  2. Art Vernissage Auction House, Art Gallery <br /> 8, Mukimi
                  Avenue 1, Yakkasarai district, 100100, Tashkent, Uzbekistan{" "}
                </span>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white flex justify-center py-3 items-center w-full">
        <div className="flex items-center flex-col">
          <h2 className="text-[#6d6d6d] text-[22px] ">© 2025 ART Vernissage</h2>
          <span className="text-[#6d6d6d] text-[14px]">
            Developed by{" "}
            <a href="#" className="text-yellow-400">
              WEBadiko
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
