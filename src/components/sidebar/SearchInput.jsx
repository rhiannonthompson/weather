import React, { useState, useEffect, useContext } from "react";
import {TodaysWeatherDispatch} from "../../state/providers/TodaysWeatherProvider";
import getURL from "../../utilities/urlRequests/getURL";
import useFetch from "../../utilities/hooks/useFetch";
import { ForecastDispatch } from "../../state/providers/ForecastProvider";

export default function SearchInput() {
  
  //todo add prop types
  
  const [location, setLocation] = useState("");
  const { isLoading, error, dataOne, dataTwo, submitRequest } = useFetch();
  const dispatchTodaysWeather = useContext(TodaysWeatherDispatch);
  const dispatchForecast = useContext(ForecastDispatch);

  useEffect(() => {
    if (dataOne) {
      dispatchTodaysWeather({ type: "SUCCESS",  payload: dataOne })
    }
    if (dataTwo) {
      dispatchForecast({ type: "SUCCESS", payload: dataTwo });
    }
  }, [dataOne, dataTwo]); 


  function submitFormRequest(city) {
    const urlOne = getURL(city, "weather");
    const urlTwo = getURL(city, "forecast");
    submitRequest(urlOne, urlTwo);
  }
  
  function handleFormSubmit(e) {
    e.preventDefault();
    if (!location || location === "") {
      return;
    }
    submitFormRequest(location);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          className="p-2 text-gray-800"
          name="location"
          placeholder="Your Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </form>
    </div>
  );
}
