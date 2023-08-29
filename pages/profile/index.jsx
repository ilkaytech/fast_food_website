import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex px-10">
      <div className="border w-77">
        <div className="relative flex flex-col items-center p-10">
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
            className="border w-full p-2 cursor-pointer hover:bg-primary
          hover:text-white transition-all  "
          >
            <i className="fa fa-home"></i>
            <button className="ml-1">Account</button>
          </li>
          <li>
            <button>Password</button>
          </li>
          <li>
            <button>Orders</button>
          </li>
          <li>
            <button>Çıkış</button>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
