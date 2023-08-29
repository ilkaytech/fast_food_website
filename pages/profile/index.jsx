import Image from "next/image";
import React from "react";
import Title from "../../components/ui/Title";

const Profile = () => {
  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)]">
      <div className="w-80">
        <div
          className="relative flex flex-col items-center px-10 py-5
        border border-b-0"
        >
          <Image
            src="/images/client2.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-2xl mt-1">John Doe</b>
        </div>
        <ul className="font-semibold">
          <li
            className="border w-full p-3 cursor-pointer hover:bg-primary
          hover:text-white transition-all  "
          >
            <i class="fas fa-house-user"></i>
            <button className="ml-2">Account</button>
          </li>
          <li
            className="border w-full p-3 cursor-pointer hover:bg-primary
          hover:text-white transition-all  "
          >
            <i class="fas fa-key"></i>
            <button className="ml-2">Password</button>
          </li>
          <li
            className="border w-full p-3 cursor-pointer hover:bg-primary
          hover:text-white transition-all  "
          >
            <i class="fas fa-shipping-fast"></i>
            <button className="ml-2">Orders</button>
          </li>
          <li
            className="border w-full p-3 cursor-pointer hover:bg-primary
          hover:text-white transition-all  "
          >
            <i class="fas fa-sign-out-alt"></i>
            <button className="ml-2">Exit</button>
          </li>
        </ul>
      </div>
      <div>
        <Title>Account Settings</Title>
      </div>
    </div>
  );
};

export default Profile;
