import React, { useState, useEffect, useContext } from "react";
import { TodaysWeatherDispatch } from "../../state/providers/TodaysWeatherProvider";
import getURL from "../../utilities/urlRequests/getURL";
import useFetch from "../../utilities/hooks/useFetch";
import { ForecastDispatch } from "../../state/providers/ForecastProvider";
import { WeatherStatsDispatch } from "../../state/providers/WeatherStatsProvider";
import getLatLngURL from "../../utilities/urlRequests/getLatLngURL";

const defaultGeoLocationStatus = {
  lat: null,
  lng: null,
  status: "",
};

export default function SearchInput() {
  const [location, setLocation] = useState("");
  const [coords, setCoords] = useState(defaultGeoLocationStatus);
  const { isLoading, error, dataOne, dataTwo, submitRequest } = useFetch();

  const dispatchTodaysWeather = useContext(TodaysWeatherDispatch);
  const dispatchWeatherStats = useContext(WeatherStatsDispatch);
  const dispatchForecast = useContext(ForecastDispatch);

  useEffect(() => {
    if (dataOne) {
      dispatchTodaysWeather({ type: "SUCCESS", payload: dataOne });
      dispatchWeatherStats({ type: "SUCCESS", payload: dataOne });
    }
    if (dataTwo) {
      dispatchForecast({ type: "SUCCESS", payload: dataTwo });
    }
  }, [dataOne, dataTwo]); // eslint-disable-line

  useEffect(() => {
    const urlOne = getLatLngURL("weather", coords.lat, coords.lng);
    const urlTwo = getLatLngURL("forecast", coords.lat, coords.lng);
    submitRequest(urlOne, urlTwo);

  }, [coords.lat, coords.lng]); // eslint-disable-line

  function submitFormRequest(city) {
    const urlOne = getURL("weather", city);
    const urlTwo = getURL("forecast", city);
    submitRequest(urlOne, urlTwo);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!location || location === "") {
      return;
    }
    submitFormRequest(location);
  }

  function handleClickSetUserGeoLocation() {
    if (!navigator.geolocation) {
      setCoords({ ...coords, status: "not available" });
    }
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        ...coords,
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        status: "located"
      });
    });
    setCoords(defaultGeoLocationStatus);
  }

  return (
    <>
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

      <button
        onClick={handleClickSetUserGeoLocation}
        className="bg-white p-2 rounded-full"
      >
        +
      </button>
    </>
  );
}
