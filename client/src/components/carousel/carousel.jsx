"use client";
import Banner from '/img/banner.png';
import Banner1 from '/img/banner1.png';
import Banner2 from '/img/banner2.png';
import Banner3 from '/img/banner3.png';

import { Carousel } from "flowbite-react";

export function CarouselComponent() {
  return (
    <div className=" w-[1320px] h-screen mx-auto">
      <Carousel indicators={false}> 
        <img src={Banner} alt="..." />
        <img src={Banner1} alt="..." />
        <img src={Banner2} alt="..." />
        <img src={Banner3} alt="..." />
      </Carousel>
    </div>
  );
}
