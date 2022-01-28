import React from "react";
import { roundNumber } from "../../utilities/helperFunctions/miscHelpers";
import { convertToFahrenheit } from "../../utilities/helperFunctions/convertToImperial";
import { selectWeatherImageFromDescription } from "../../data/weatherImages";
import { weatherTypeImages } from "../../data/weatherImages";

export default function FiveDayForecastCard(props) {

  const { date, tempHigh, tempLow, description, isMetric } = props;

  const weatherImage = selectWeatherImageFromDescription(description, weatherTypeImages);
  

  return (
    <div className="bg-blue-800 flex flex-col items-center">
      <p className="text-white text-xl mt-4">{date}</p>

      <div className="h-24 md:h-20 mt-4">
        <img className="w-18 md:w-14 my-2" alt="weather" src={weatherImage} />
      </div>
      <div
        className="flex justify-center
                 my-4 text-white"
      >
        <p className="mx-2 text-lg">
          {isMetric
            ? `${roundNumber(parseFloat(tempLow), 1)}°C`
            : `${roundNumber(convertToFahrenheit(parseFloat(tempLow)), 1)}°F`}
        </p>
        <p className="mx-2 text-lg text-gray-400">
          {isMetric
            ? `${roundNumber(parseFloat(tempHigh), 1)}°C`
            : `${roundNumber(convertToFahrenheit(parseFloat(tempHigh)), 1)}°F`}
        </p>
      </div>
    </div>
  );
}
