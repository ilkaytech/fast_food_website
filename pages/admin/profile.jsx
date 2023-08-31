import Image from "next/image";
import React, { useState } from "react";
import Account from "../../components/profile/Account";
import Password from "../../components/profile/Password";
import Products from "../../components/admin/Products";
import Order from "../../components/admin/Order";

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
            src="/images/admin.png"
            alt=""
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-2xl mt-1">Admin</b>
        </div>
        <ul className=" text-center font-semibold">
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary
          hover:text-white transition-all ${
            tabs === 0 && "bg-primary text-white"
          } `}
            onClick={() => setTabs(0)}
          >
            <i class="fas fa-cutlery"></i>
            <button className="ml-2">Products</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary
            hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            } `}
            onClick={() => setTabs(1)}
          >
            <i class="fas fa-shipping-fast"></i>
            <button className="ml-2">Orders</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary
            hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            } `}
            onClick={() => setTabs(2)}
          >
            <i class="fa fa-ellipsis-h"></i>
            <button className="ml-2">Categories</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary
            hover:text-white transition-all ${
              tabs === 3 && "bg-primary text-white"
            } `}
            onClick={() => setTabs(3)}
          >
            <i class="fas fa-pager"></i>
            <button className="ml-2">Footer</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary
            hover:text-white transition-all ${
              tabs === 4 && "bg-primary text-white"
            } `}
            onClick={() => setTabs(4)}
          >
            <i class="fas fa-running"></i>
            <button className="ml-2">Exit</button>
          </li>
        </ul>
      </div>
      {tabs === 0 && <Products />}
      {tabs === 1 && <Order />}
    </div>
  );
};

export default Profile;
