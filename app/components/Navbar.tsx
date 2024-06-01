"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { usePoints, useUser } from "../user/hooks";
const Navbar = () => {
  const [points, addPoints] = usePoints();
  const user = useUser();
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
        <div className="group bg-gray-300 py-2 px-3 rounded-2xl relative">
          <button
            onClick={() => addPoints(1000)}
            className="text-md text-black flex flex-row items-center gap-2"
          >
            {points}
            <Image src="/assets/coin.svg" alt="coin" width={20} height={20} />
          </button>
          <span className="pointer-events-none group-hover:visible invisible text-center w-[80px] absolute z-50 top-11 -left-3 block px-2 py-1 text-xs text-black font-light tracking-tighter  bg-gray-300 rounded-lg shadow-sm">
            Add points
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
