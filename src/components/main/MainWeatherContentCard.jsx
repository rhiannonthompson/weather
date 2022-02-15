import React from "react";
import WindDirection from "./WindDirection";
import HumidityBar from "./HumidityBar";
import { WEATHER_TYPE } from "../../state/constants/weatherType";
import {
  formateString,
  roundNumber,
} from "../../utilities/helperFunctions/miscHelpers";
import { convertToMiles } from "../../utilities/helperFunctions/convertToImperial";
import Loading from "../common/Loading";

export default function MainWeatherContentCard(props) {
  const {
    weatherType,
    title,
    measurement,
    unitOfMeasurement,
    direction,
    icon,
    isMetric,
    isLoading,
  } = props;

  const formattedTitle = formateString(title);

  function getFormattedMeasurements(num) {
    if (weatherType === WEATHER_TYPE.visibility) {
      const convertedToKM = num / 1000;
      return roundNumber(convertedToKM, 2);
    }
    return roundNumber(measurement, 0);
  }
  const formattedMeasure = getFormattedMeasurements(measurement);

  return (
    <div className="relative col-span-1 bg-secondary-dark-blue text-text-white p-3 flex flex-col items-center place-content-center">
      <h3 className="text-xl">{formattedTitle}</h3>
      <div className="text-5xl my-4 font-bold">
        {weatherType === WEATHER_TYPE.wind ||
        weatherType === WEATHER_TYPE.visibility
          ? isMetric
            ? formattedMeasure
            : roundNumber(convertToMiles(parseInt(formattedMeasure)), 1)
          : formattedMeasure}
        <span className="text-xl ml-2">
          {isMetric ? unitOfMeasurement.metric : unitOfMeasurement.imperial}
        </span>
      </div>
      {weatherType === WEATHER_TYPE.wind && (
        <WindDirection direction={direction} icon={icon} />
      )}
      {weatherType === WEATHER_TYPE.humidity && (
        <HumidityBar measurement={measurement} />
      )}
      {isLoading && <Loading textSize={"text-xl"} />}

    </div>
  );
}
