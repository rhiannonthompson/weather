import React, { useState, useEffect, useContext } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { TodaysWeatherDispatch } from "../../state/providers/TodaysWeatherProvider";
import useFetch from "../../utilities/hooks/useFetch";
import { ForecastDispatch } from "../../state/providers/ForecastProvider";
import { WeatherStatsDispatch } from "../../state/providers/WeatherStatsProvider";
import {
  WEATHER_DISPATCH_TYPES,
  FORECAST_DISPATCH_TYPES,
  WEATHER_STATS_DISPATCH_TYPES,
} from "../../state/constants/weatherDispatchTypes";
import getLatLngURL from "../../utilities/urlRequests/getLatLngURL";
import LocationIcon from "./LocationIcon";

const defaultGeoLocationStatus = {
  lat: null,
  lng: null,
  status: "",
};

const searchOptions = {
  types: ["(cities)"],
};

export default function SearchInput() {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [isUsingLocation, setIsUsingLocation] = useState(true);
  const [locationError, setLocationError] = useState(null);

  const [coords, setCoords] = useState(defaultGeoLocationStatus);
  const { isLoading, dataOne, dataTwo, submitRequest } = useFetch();

  const dispatchTodaysWeather = useContext(TodaysWeatherDispatch);
  const dispatchWeatherStats = useContext(WeatherStatsDispatch);
  const dispatchForecast = useContext(ForecastDispatch);

  useEffect(() => {
    if (dataOne) {
      dispatchTodaysWeather({
        type: WEATHER_DISPATCH_TYPES.success,
        payload: { dataOne, city, isUsingLocation },
      });
      dispatchWeatherStats({
        type: WEATHER_STATS_DISPATCH_TYPES.success,
        payload: dataOne,
      });
    }
    if (dataTwo) {
      dispatchForecast({
        type: FORECAST_DISPATCH_TYPES.success,
        payload: dataTwo,
      });
    }
  }, [dataOne, dataTwo, city, isLoading]); // eslint-disable-line

  useEffect(() => {
    dispatchTodaysWeather({
      type: WEATHER_DISPATCH_TYPES.error,
      payload: locationError,
    });
  }, [locationError]); // eslint-disable-line

  useEffect(() => {
    dispatchTodaysWeather({
      type: WEATHER_DISPATCH_TYPES.loading,
      payload: isLoading,
    });
    dispatchWeatherStats({
      type: WEATHER_STATS_DISPATCH_TYPES.loading,
      payload: isLoading,
    });
    dispatchForecast({
      type: FORECAST_DISPATCH_TYPES.loading,
      payload: isLoading,
    });
  }, [isLoading, city]); // eslint-disable-line

  useEffect(() => {
    const urlOne = getLatLngURL("weather", coords.lat, coords.lng);
    const urlTwo = getLatLngURL("forecast", coords.lat, coords.lng);
    submitRequest(urlOne, urlTwo);
  }, [coords.lat, coords.lng]); // eslint-disable-line

  function handleClickSetUserGeoLocation() {
    if (!navigator.geolocation) {
      setCoords({ ...coords, status: "not available" });
    }
    navigator.geolocation.getCurrentPosition((position) => {
      setIsUsingLocation(true);
      setCoords({
        ...coords,
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        status: "located",
      });
    });
    setCoords(defaultGeoLocationStatus);
    setAddress("");
  }

  function handleChangeAddress(address) {
    setAddress(address);
  }

  function clearInput() {
    setAddress("");
    setIsUsingLocation(true);
  }

  function handleSelectAddress(address) {
    if (!address || address.length < 3) {
      setAddress("");
      return;
    }
    setIsUsingLocation(false);
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setCity(address);
        setCoords({ ...coords, lat: lat, lng: lng });
      })
      .catch((error) => setLocationError(error));
    setAddress("");
    setLocationError(null);
  }

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={handleChangeAddress}
        onSelect={handleSelectAddress}
        highlightFirstSuggestion={true}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="relative w-64">
            <input
              {...getInputProps({
                placeholder: "find city...",
                autoFocus: true,
                onBlur: clearInput,
                className:
                  "p-2 bg-secondary-dark-blue border-2 text-text-white focus:outline-none focus:bg-secondary-blue w-full",
              })}
            />
            <div className="absolute z-30 bg-secondary-dark-blue text-text-white w-64">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                return (
                  <div
                    key={index}
                    className="min-w-full"
                    {...getSuggestionItemProps(suggestion)}
                  >
                    <div
                      className={
                        suggestion.active
                          ? "bg-primary-gray cursor-pointer border-b p-2 text-lg"
                          : "bg-blue-600 cursor-pointer border-b p-2 text-lg"
                      }
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <LocationIcon setUserGeoLocation={handleClickSetUserGeoLocation} />
    </>
  );
}
