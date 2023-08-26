import React from "react";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div
          className="flex md:justify-between justify-center text-center flex-wrap 
        md:gapy-0 gap-y-6"
        >
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <a href="https://goo.gl/maps/MGyQwxJ7Lq231SpG9">
                <i className="fa-solid fa-location-dot duration-300 transform  hover:text-primary hover:scale-110"></i>
                <span className="inline-block ml-2">Location</span>
              </a>
              <div>
                <i className="fa fa-phone"></i>
                <span className="inline-block ml-2">Call +1 530 264 82 14</span>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">info@ilkaytech.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px]">Feane</Title>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odio
              debitis doloribus mollitia, saepe nobis iure atque corporis
              aliquid consequatur?
            </p>
            <div className="flex items-center justify-center mt-5 gap-x-2 ">
              <a
                href="https://www.instagram.com/ilkaytech"
                className="w-8 h-8 grid place-content-center bg-white text-secondary
                rounded-full duration-300 transform  hover:text-primary hover:scale-110 "
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/ilkaytech"
                className="w-8 h-8 grid place-content-center bg-white text-secondary 
                rounded-full duration-300 transform  hover:text-primary hover:scale-110"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ilkaytech"
                className="w-8 h-8 grid place-content-center bg-white text-secondary
                rounded-full duration-300 transform  hover:text-primary hover:scale-110"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/ilkaytech"
                className="w-8 h-8 grid place-content-center bg-white text-secondary
                rounded-full duration-300 transform  hover:text-primary hover:scale-110"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.youtube.com/@ilkaytech/about"
                className="w-8 h-8 grid place-content-center bg-white text-secondary
                rounded-full duration-300 transform  hover:text-primary hover:scale-110"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">Everyday</span>
              </div>
              <div>
                <span className="inline-block ml-2">09.00 Am - 10.00 Pm</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center mt-10">
            @ 2023 All Rights Reserved ilkaytech
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
