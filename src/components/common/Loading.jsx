import React from "react";

export default function Loading({textSize}) {
  return (
    <div className="absolute bg-secondary-dark-blue opacity-90 flex items-center justify-center h-full w-full">
    <p className={`text-text-white ${textSize}`}>Loading...</p>
    </div>
  );
}
