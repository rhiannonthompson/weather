import React from "react";
import DirectionIcon from "../main/DirectionIcon";
import { convertDegToCardinalDirection } from "../../utilities/helperFunctions/convertDegToCardinalDirection";

export default function WindDirection({direction}) {
  
  const cardinalDirection = convertDegToCardinalDirection(direction);
  
  return (
    <div className="flex items-center justify-center">
      <DirectionIcon rotation={cardinalDirection}/>
      <p className="ml-4 font-bold">{cardinalDirection}</p>
    </div>
  );
}
