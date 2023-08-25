import React from "react";
import Title from "../ui/Title";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto">
        <div>
          <div>
            <Title addClass="text-[30px]">Contact Us</Title>
            <div>
              <span></span>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div>
          <p className="text-center">@ 2023 All Rights Reserved ilkaytech</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
