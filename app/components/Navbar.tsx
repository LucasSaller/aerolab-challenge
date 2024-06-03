"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { usePoints, useUser } from "../user/hooks";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import Link from "next/link";
import { LiaHistorySolid } from "react-icons/lia";

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
    <div className="flex justify-between w-full py-5 px-10 shadow-lg fixed top-0 left-0 bg-white z-10">
      <div className="flex-1">
        <Image
          className=""
          width={0}
          height={0}
          style={{ width: "35px", height: "auto" }}
          src="/assets/aerolab-logo.svg"
          alt="logo"
          priority
        />
      </div>
      <div className="flex flex-row items-center gap-4">
        <h2 className="text-black text-sm">{user.name} </h2>
        <Link
          className="text-black text-sm flex flex-row gap-2 items-center font-medium bg-gray-200 py-2 px-3 rounded-sm "
          href="/history"
        >
          <LiaHistorySolid />
          History
        </Link>

        <AnimatedTooltip item={item} onClick={() => addPoints(1000)} />
      </div>
    </div>
  );
};

export default Navbar;
