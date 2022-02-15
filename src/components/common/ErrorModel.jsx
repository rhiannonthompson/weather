import React, { useContext } from "react";
import { TodaysWeatherDispatch } from "../../state/providers/TodaysWeatherProvider";
import { WEATHER_DISPATCH_TYPES } from "../../state/constants/weatherDispatchTypes";

export default function ErrorModel({ error, textSize }) {
  const dispatchTodaysWeather = useContext(TodaysWeatherDispatch);

  function handleClickCloseErrorModel() {
    dispatchTodaysWeather({ type: WEATHER_DISPATCH_TYPES.clearError });
  }

  return (
    <div className="absolute bg-secondary-dark-blue text-text-white opacity-90 flex items-center justify-center h-full w-full">
      <div className="flex-col text-center border-2 text-1xl">
        <div className="flex justify-end p-2">
          <button
            onClick={handleClickCloseErrorModel}
            className="font-2xl border-2 border-text-white px-2 rounded-md hover:bg-main-dark-blue"
          >
            X
          </button>
        </div>
        <div className="p-4">
          <p>{error}</p>
          <p>We could not locate your city.</p>
          <p>Please try again</p>
        </div>
      </div>
    </div>
  );
}
