import React from "react";
import { convertDegToCardinalDirection } from "../../utilities/helperFunctions/convertDegToCardinalDirection";

export default function WindDirection(props) {
  
  const { icon, direction } = props;
  
  const cardinalDirection = convertDegToCardinalDirection(direction);
  
  return (
    <div className="flex items-center place-content-center">
      <p className="bg-gray-800 rounded-full px-2 text-3xl">{icon}</p>
      <p className="ml-4">{cardinalDirection}</p>
    </div>
  );
}
