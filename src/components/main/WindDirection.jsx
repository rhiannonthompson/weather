import React from "react";

export default function WindDirection(props) {
  
  const { icon, text } =  props.direction;
  
  return (
    <div className="flex items-center place-content-center">
      <p className="bg-gray-800 rounded-full px-2 text-3xl">{icon}</p>
      <p className="ml-4">{text}</p>
    </div>
  );
}
