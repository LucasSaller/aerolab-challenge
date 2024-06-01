import React from "react";

interface CountProps {
  current: number;
  total: number;
}

const Count = ({ current, total }: CountProps) => {
  return (
    <div className=" px-5">
      <span className="text-black">
        {current} of {total} products
      </span>
    </div>
  );
};

export default Count;
