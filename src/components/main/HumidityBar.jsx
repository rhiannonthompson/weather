import React from "react";

export default function HumidityBar() {
  return (
    <div className="px-8 w-full">
      <div className="flex justify-between w-full">
        <p className="text-sm">0</p>
        <p className="text-sm">50</p>
        <p className="text-sm">100</p>
      </div>
      <div className="w-full h-4 bg-white rounded-full">
        <div className="w-3/4 h-full bg-yellow-300 rounded-tl-full rounded-bl-full" />
      </div>
      <div className="flex justify-end w-full">
        <p>%</p>
      </div>
    </div>
  );
}
