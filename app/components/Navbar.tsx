"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { usePoints, useUser } from "../user/hooks";
const Navbar = () => {
  const [points, addPoints] = usePoints();
  const user = useUser();
  return (
    <div className="flex justify-between w-full py-5 px-10 shadow-lg">
      <div className="flex-1">
        <img className="" src="/assets/aerolab-logo.svg" alt="" />
      </div>
      <div className="flex flex-row items-center gap-4">
        <h2 className="text-black">{user.name} </h2>
        <div className="group flex flex-row gap-1 bg-gray-300 py-2 px-3 rounded-2xl relative">
          <button
            className="text-md text-black"
            onClick={() => addPoints(1000)}
          >
            {points}
          </button>
          <span className="pointer-events-none group-hover:visible invisible absolute z-50 top-11 inline-block px-2 py-1 text-[10px] text-black font-medium tracking-tighter  bg-gray-300 rounded-lg shadow-sm">
            Add points
          </span>
          <Image src="/assets/coin.svg" alt="coin" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
