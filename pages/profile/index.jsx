import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex">
      <div className="border p-10">
        <div className="relative">
          <Image src="/images/client2.jpg" alt="" width={60} height={60} />
          <b>John Doe</b>
        </div>
        <div>
          <div>
            <button>Account</button>
          </div>
          <div>
            <button>Password</button>
          </div>
          <div>
            <button>Orders</button>
          </div>
          <div>
            <button>Çıkış</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
