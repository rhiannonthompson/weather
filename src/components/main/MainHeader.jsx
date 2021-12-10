import React from "react";

export default function MainHeader() {
  return (
    <div className="flex pt-8 justify-end">
      <div className="mx-6">
        <p className="py-2 px-3 rounded-full bg-white">℃</p>
      </div>
      <div>
        <p className="py-2 px-3 rounded-full bg-gray-400">℉</p>
      </div>
    </div>
  );
}
