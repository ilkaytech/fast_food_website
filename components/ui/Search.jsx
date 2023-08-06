import Image from "next/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import { GiCancel } from "react-icons/gi";

const Search = ({ setIsSearchModal }) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-50 
    after:content-[''] after:w-screen 
    after:h-screen after:bg-white after:absolute after:opacity-60
    after:top-0 after:left-0 grid place-content-center"
    >
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center">
          <div
            className="relative z-50 md:w-[600px] w-[370px] 
           bg-white border-2 p-10 rounded-3xl"
          >
            <Title addClass="text-[40px] text-center ">Search</Title>
            <input
              type="text"
              placeholder="Search..."
              className="border w-full my-10"
            />
            <ul>
              <li
                className="flex items-center justify-between p-1
                 hover:bg-primary transition-all"
              >
                <div className="relative flex">
                  <Image
                    src="/images/BBQ_Bacon-8045.png"
                    alt=""
                    width={78}
                    height={78}
                  />
                </div>
                <span className="font-bold">BBQ MEATLOVERS PIZZA</span>
                <span className="font-bold">$16.99</span>
              </li>
              <li
                className="flex items-center justify-between p-1
                 hover:bg-primary transition-all"
              >
                <div className="relative flex">
                  <Image
                    src="/images/Hete_kip-9364.png"
                    alt=""
                    width={78}
                    height={78}
                  />
                </div>
                <span className="font-bold">HETE KIP PIZZA</span>
                <span className="font-bold">$8.99</span>
              </li>
              <li
                className="flex items-center justify-between p-1
                 hover:bg-primary transition-all"
              >
                <div className="relative flex">
                  <Image src="/images/bbq2.png" alt="" width={78} height={78} />
                </div>
                <span className="font-bold">BBQ MIXED GRILL PIZZA</span>
                <span className="font-bold">$16.49</span>
              </li>
            </ul>
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsSearchModal(false)}
            >
              <GiCancel
                size={20}
                className="hover:text-primary transition-all"
              />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
