import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="h-[calc(100vh_-_88px)]">
      <div className="relative h-full w-full ">
        <Image src="/images/bg1.jpg" alt="" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Carousel;
