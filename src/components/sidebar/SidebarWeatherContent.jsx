import React, { useContext } from "react";
import { format } from "fecha";
import getCurrentDate from "../../utilities/helperFunctions/getCurrentDate";
import { TodaysWeatherState } from "../../state/providers/TodaysWeatherProvider";
import {
  formateString,
  roundNumber,
} from "../../utilities/helperFunctions/miscHelpers";
import { UnitOfMeasureState } from "../../state/providers/UnitOfMeasureProvider";
import { convertToFahrenheit } from "../../utilities/helperFunctions/convertToImperial";
import { selectWeatherImageFromDescription } from "../../data/weatherImages";
import { weatherTypeImages } from "../../data/weatherImages";

export default function SidebarWeatherContent() {
  const todaysWeather = useContext(TodaysWeatherState);
  const isMetric = useContext(UnitOfMeasureState);

  const { temp, description, cityName} = todaysWeather;

  const formattedDate = format(getCurrentDate(), "ddd D MMM");

  const formattedDescription = formateString(description);
  const formattedCityName = formateString(cityName);
  const weatherImage = selectWeatherImageFromDescription(description, weatherTypeImages);


  return (
    <div className="flex flex-col items-center mt-18 md:mt-28 lg:mt-20">
      <img
        className="w-36 md:w-52 lg:w-44"
        alt="current-weather"
        src={weatherImage}
      />
      <div className="mt-10 md:mt-18 ml-4">
        <p className="text-8xl font-semibold text-white">
          {isMetric
            ? roundNumber(parseFloat(temp), 0)
            : roundNumber(convertToFahrenheit(parseFloat(temp)), 1)}
          <span className="text-5xl text-gray-400">
            {isMetric ? "°C" : "°F"}
          </span>
        </p>
      </div>
      <div className="mt-10 md:mt-18">
        <p className="text-3xl font-semibold text-gray-400">
          {formattedDescription}
        </p>
      </div>
      <div className="flex w-2/3 justify-center mt-10 md:mt-18 text-xl font-semibold text-gray-400 mb-6">
        <div className="text-right">Today</div>
        <div className="text-center px-4">-</div>
        <div className="text-left">{formattedDate}</div>
      </div>
      <div>
        <p className="text-3xl font-semibold text-gray-400">
          {formattedCityName}
        </p>
      </div>
    </div>
  );
}
