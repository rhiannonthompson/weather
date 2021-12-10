import React from "react";

export default function FiveDayForecastCard(props) {
  
  const { date, image, tempHigh, tempLow } = props;
  
  return (
    <div className="bg-blue-800 flex flex-col items-center">
      <p className="text-white text-xl mt-4">{date}</p>

      <div className="h-24 md:h-20 mt-4">
        <img className="w-18 md:w-14 my-2" alt="weather" src={image} />
      </div>
      <div
        className="flex justify-center
                 my-4 text-white"
      >
        <p className="mx-2 text-lg">{`${tempLow}℃`}</p>
        <p className="mx-2 text-lg text-gray-400">{`${tempHigh}℃`}</p>
      </div>
      </div>
      
  );
}
