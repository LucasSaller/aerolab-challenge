import React from "react";

interface CountProps {
  current: number;
  total: number;
}

const Count = ({ current, total }: CountProps) => {
  return (
    <div className="border-r-2 border-black/20 px-5">
      <span className="text-black">
        {current} of {total} products
      </span>
    </div>
  );
};

export default Count;
