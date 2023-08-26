import React from "react";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex justify-between text-center ">
          <div>
            <Title addClass="text-[30px]">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-6">
              <div>
                <i className="fa-solid fa-location-dot"></i>
                <span className="inline-block ml-2">Location</span>
              </div>
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
          <div>
            <Title addClass="text-[30px]">Feane</Title>
            <div className="flex flex-col gap-y-2 mt-6">
              <div>
                <i className="fa-solid fa-location-dot"></i>
                <span className="inline-block ml-2">Location</span>
              </div>
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
          <div>
            <Title addClass="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-6">
              <div>
                <i className="fa-solid fa-location-dot"></i>
                <span className="inline-block ml-2">Location</span>
              </div>
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
