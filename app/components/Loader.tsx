import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-12 h-12 border-4 border-orange-600 border-b-transparent rounded-full inline-block box-border animate-rotation"></div>
    </div>
  );
};

export default Loader;
