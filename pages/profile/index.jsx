import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex px-10">
      <div className="border w-80">
        <div className="relative flex flex-col items-center px-10 py-5">
          <Image
            src="/images/client2.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-2xl mt-1">John Doe</b>
        </div>
        <ul className="">
          <li
            className="border w-full p-3 cursor-pointer hover:bg-primary
          hover:text-white transition-all  "
          >
            <i class="fas fa-house-user"></i>
            <button className="ml-1">Account</button>
          </li>
          <li
            className="border w-full p-3 cursor-pointer hover:bg-primary
          hover:text-white transition-all  "
          >
            <i class="fas fa-key"></i>
            <button className="ml-1">Password</button>
          </li>
          <li
            className="border w-full p-3 cursor-pointer hover:bg-primary
          hover:text-white transition-all  "
          >
            <i class="fas fa-shipping-fast"></i>
            <button className="ml-1">Orders</button>
          </li>
          <li
            className="border w-full p-3 cursor-pointer hover:bg-primary
          hover:text-white transition-all  "
          >
            <i class="fas fa-sign-out-alt"></i>
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
