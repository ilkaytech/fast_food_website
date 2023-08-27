import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="">
      <div>
        <div>
          <div className="relative">
            <Image src="/images/client2.jpg" alt="" width={60} height={60} />
            <b>John Doe</b>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Profile;
