import React from "react";
import Title from "./ui/Title";
import Input from "./form/Input";

const Reservation = () => {
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      palceholder: "Your Full Name",
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      palceholder: "Your Phone Number",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      palceholder: "Your Email Address",
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      palceholder: "How Many Persons?",
    },
  ];

  return (
    <div className="container mx-auto py-12 ">
      <Title addClass="text-[40px] mb-10">Book A Table</Title>
      <div className="flex justify-between flex-wrap-reverse gap-10">
        <div className="lg:flex-1 w-full">
          <div className="flex flex-col gap-y-3">
            {inputs.map((input) => (
              <Input key={input.id} {...input} />
            ))}
          </div>
          <button className="btn-primary mt-4">Book Now</button>
        </div>
        <div className="lg:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.729999107405!2d32.834368975589534!3d39.925058085418186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a9cea8f%3A0xd3862ea8248d08a0!2sAn%C4%B1tkabir!5e0!3m2!1str!2str!4v1692548579305!5m2!1str!2str"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
