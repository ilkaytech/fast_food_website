import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";

const Customers = () => {
  return (
    <div className="container mx-auto">
      <Title addClass="text-[40px] text-center">What Says Our Customers</Title>
      <div>
        <CustomerItem />
      </div>
    </div>
  );
};

export default Customers;
