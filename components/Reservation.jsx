import React from "react";
import Title from "./ui/Title";
import Input from "./form/Input";

const Reservation = () => {
  const inputs = [
    {
      id: 1,
    },
  ];

  return (
    <div className="container mx-auto py-12 ">
      <Title addClass="text-[40px] mb-10">Book A Table</Title>
      <div className="flex justify-between flex-wrap-reverse gap-x-10">
        <div className="lg:flex-1 w-full">
          <div className="flex flex-col gap-y-3">
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
          </div>
          <button className="btn-primary mt-4">Book Now</button>
        </div>
        <div className="lg:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.7300023882344!2d32.83207298375767!3d39.92505801200679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a9cea8f%3A0xd3862ea8248d08a0!2sAn%C4%B1tkabir!5e0!3m2!1str!2str!4v1691789419782!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-ful h-ful"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
