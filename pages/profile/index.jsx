import Image from "next/image";
import React, { useState } from "react";
import Account from "../../components/profile/Account";
import Password from "../../components/profile/Password";
import Order from "../../components/profile/Order";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <div
      className="flex px-10 min-h-[calc(100vh_-_433px)]
    lg:flex-row flex-col lg:mb-0 mb-10"
    >
      <div className="lg:w-80 w-100 flex-shrink-0">
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
        <ul className=" text-center font-semibold">
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary
          hover:text-white transition-all ${
            tabs === 0 && "bg-primary text-white"
          } `}
            onClick={() => setTabs(0)}
          >
            <i class="fas fa-house-user"></i>
            <button className="ml-2">Account</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary
            hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            } `}
            onClick={() => setTabs(1)}
          >
            <i class="fas fa-key"></i>
            <button className="ml-2">Password</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary
            hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            } `}
            onClick={() => setTabs(2)}
          >
            <i class="fas fa-shipping-fast"></i>
            <button className="ml-2">Orders</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary
            hover:text-white transition-all ${
              tabs === 3 && "bg-primary text-white"
            } `}
            onClick={() => setTabs(3)}
          >
            <i class="fas fa-sign-out-alt"></i>
            <button className="ml-2">Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Account />}
      {tabs === 1 && <Password />}
    </div>
  );
};

export default Profile;
