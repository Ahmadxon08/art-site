"use client";
import AppliedArt from "@/components/home/AppliedArt";
import ArtFine from "@/components/home/ArtFine";
import ArtGallery from "@/components/home/ArtGallery";
import Currency from "@/components/home/Currency";
import HomeMenuItems from "@/components/home/HomeMenu";
import MostActive from "@/components/home/MostActive";
import React from "react";

const HomePage = () => {
  return (
    <>
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
