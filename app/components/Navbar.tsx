"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { usePoints, useUser } from "../user/hooks";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
const Navbar = () => {
  const [points, addPoints] = usePoints();
  const user = useUser();
  const item = {
    cost: points,
    name: "Add points",
    designation: "1000",
    image: "/assets/coin.svg",
  };
  return (
    <div className="flex justify-between w-full py-5 px-10 shadow-lg fixed bg-white z-10">
      <div className="flex-1">
        <Image
          className=""
          width={0}
          height={0}
          style={{ width: "40px", height: "auto" }}
          src="/assets/aerolab-logo.svg"
          alt="logo"
          priority
        />
      </div>
      <div className="flex flex-row items-center gap-4">
        <h2 className="text-black">{user.name} </h2>

        <AnimatedTooltip item={item} onClick={() => addPoints(1000)} />
        {/* <button
            onClick={() => addPoints(1000)}
            className="text-md text-black flex flex-row items-center gap-2"
          >
            {points}
            <Image src="/assets/coin.svg" alt="coin" width={20} height={20} />
          </button> */}
      </div>
    </div>
  );
};

export default Navbar;
