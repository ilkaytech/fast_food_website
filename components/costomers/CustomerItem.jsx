import Image from "next/image";
import React from "react";

const CustomerItem = () => {
  return (
    <div>
      <div className="p-6 bg-secondary text-white rounded-[5px] ">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At nulla
          consequuntur voluptates vero laboriosam voluptatem blanditiis deleniti
          distinctio, veritatis voluptatum!
        </p>
        <div className="flex flex-col mt-4 ">
          <span className="text-lg font-semibold ">Moana Mischell</span>
          <span className="text-[15px]">magna aliqua</span>
        </div>
      </div>

      <div>{/* <Image /> */}</div>
    </div>
  );
};

export default CustomerItem;
