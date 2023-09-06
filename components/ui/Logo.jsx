import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <img src="./images/dd.png" alt="" className="w-32 h-66 " />
      {/* <span className="text-[2rem] font-dancing font-bold cursor-pointer ">
        Feane
      </span> */}
    </Link>
  );
};

export default Logo;
