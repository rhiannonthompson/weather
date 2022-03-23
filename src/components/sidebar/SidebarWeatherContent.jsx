import React, { useContext } from "react";
import { format } from "fecha";
import getCurrentDate from "../../utilities/helperFunctions/getCurrentDate";
import { TodaysWeatherState } from "../../state/providers/TodaysWeatherProvider";
import {
  formateString,
  roundNumber,
  editCityName,
} from "../../utilities/helperFunctions/miscHelpers";
import { UnitOfMeasureState } from "../../state/providers/UnitOfMeasureProvider";
import { convertToFahrenheit } from "../../utilities/helperFunctions/convertToImperial";
import { selectWeatherImageFromDescription } from "../../data/weatherImages";
import { weatherTypeImages } from "../../data/weatherImages";
import Loading from "../common/Loading";
import ErrorModel from "../common/ErrorModel";

export default function SidebarWeatherContent() {
  const todaysWeather = useContext(TodaysWeatherState);
  const isMetric = useContext(UnitOfMeasureState);

  const { temp, description, cityName, isLoading, error } = todaysWeather;

  const formattedDate = format(getCurrentDate(), "ddd D MMM");

  const formattedDescription = formateString(description);
  const weatherImage = selectWeatherImageFromDescription(
    description,
    weatherTypeImages
  );

  const { primaryRegion, secondaryRegion } = editCityName(cityName);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <div className="mt-6">
          <img
            alt="current-weather"
            src={weatherImage}
            className="h-64 w-84"
          />
        </div>
      </div>
      <div className="ml-4 mt-4">
        <p className="text-8xl font-light text-text-white">
          {isMetric
            ? roundNumber(parseFloat(temp), 0)
            : roundNumber(convertToFahrenheit(parseFloat(temp)), 1)}
          <span className="text-4xl text-text-gray">
            {isMetric ? "°C" : "°F"}
          </span>
        </p>
      </div>
      <div className="mt-12">
        <p className="text-3xl font-semibold text-text-gray">
          {formattedDescription}
        </p>
      </div>
      <div className="mt-4 flex w-2/3 justify-center text-xl font-semibold text-text-gray">
        <div className="text-right">Today</div>
        <div className="text-center px-4">-</div>
        <div className="text-left">{formattedDate}</div>
      </div>
      <div className="mt-12">
        <p className="text-2xl text-center font-semibold text-text-white">
          {primaryRegion}
        </p>
        <p className="mt-4 text-xl text-center font-semibold text-text-gray">
          {secondaryRegion}
        </p>
      </div>
      {isLoading && <Loading textSize={"text-2xl"} />}
      {error && <ErrorModel error={error} />}
    </div>
  );
}
