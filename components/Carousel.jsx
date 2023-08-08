import React from "react";
import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";
import { settings } from "eslint-config-next";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="h-screen w-full container mx-auto -mt-[88px] ">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full ">
          <Image
            src="/images/bg4.jpeg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
          <Title addClass="text-6xl">Fast Food Restaurant</Title>
          <p className="text-sm sm:w-2/5 w-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            perspiciatis et, veritatis quaerat molestias beatae quibusdam non.
            Quam, provident unde.
          </p>
          <button className="btn-primary">Order Now</button>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
