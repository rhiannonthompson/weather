import React from "react";
import Loading from "../common/Loading";
import { roundNumber } from "../../utilities/helperFunctions/miscHelpers";
import { convertToFahrenheit } from "../../utilities/helperFunctions/convertToImperial";
import { selectWeatherImageFromDescription } from "../../data/weatherImages";
import { weatherTypeImages } from "../../data/weatherImages";

export default function FiveDayForecastCard(props) {
  const { date, tempHigh, tempLow, description, isMetric, isLoading } = props;

  const weatherImage = selectWeatherImageFromDescription(
    description,
    weatherTypeImages
  );

  return (
    <div className="bg-secondary-dark-blue flex flex-col items-center py-4 relative">
      <p className="text-text-white text-xl">{date}</p>

      <div>
        <img className="w-24 h-24 my-2" alt="weather" src={weatherImage} />
      </div>
      <div className="flex justify-center">
        <p className="mx-2 text-lg text-text-gray">
          {isMetric
            ? `${roundNumber(parseFloat(tempLow), 1)}°C`
            : `${roundNumber(convertToFahrenheit(parseFloat(tempLow)), 1)}°F`}
        </p>
        <p className="mx-2 text-lg text-text-white">
          {isMetric
            ? `${roundNumber(parseFloat(tempHigh), 1)}°C`
            : `${roundNumber(convertToFahrenheit(parseFloat(tempHigh)), 1)}°F`}
        </p>
      </div>
      {isLoading && <Loading textSize={"text-xl"} />}
    </div>
  );
}
