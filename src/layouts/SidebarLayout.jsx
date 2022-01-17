import React, { useEffect, useState } from "react";
import background from "../assets/images/Cloud-background.png";
import SidebarHeader from "../components/sidebar/SidebarHeader";
import SidebarWeatherContent from "../components/sidebar/SidebarWeatherContent";
import useFetch from "../utilities/hooks/useFetch";
import getURL from "../utilities/urlRequests/getURL";
import useFormattedWeather from "../utilities/hooks/useFormattedWeather";
import { roundNumber, formateString } from "../utilities/helperFunctions/miscHelpers"; 

const defaultWeatherData = {
  temp: 10,
  description: "Sunny",
  cityName: "Your city",
  icon: "icon",
};

const defaultForecast = [
  {
    date: "Tomorrow",
    weatherImage: "image",
    description: "description",
    temp: "10",
    low: "4",
    high: "6",
  },
  {
    date: "13",
    weatherImage: "image",
    description: "description",
    temp: "10",
    low: "4",
    high: "6",
  },
  {
    date: "Tomorrow",
    weatherImage: "image",
    description: "description",
    temp: "10",
    low: "4",
    high: "6",
  },
  {
    date: "Tomorrow",
    weatherImage: "image",
    description: "description",
    temp: "10",
    low: "4",
    high: "6",
  },
  {
    date: "Tomorrow",
    weatherImage: "image",
    description: "description",
    temp: "10",
    low: "4",
    high: "6",
  },
];

export default function SidebarLayout() {
  const { isLoading, error, dataOne, dataTwo, submitRequest } = useFetch();
  const [weatherData, setWeatherData] = useState(defaultWeatherData);
  const [forecast, setForecast] = useState(defaultForecast);
  const { getTemperatureRanges, getWeatherDates, getFormattedWeatherDates } = useFormattedWeather();

  console.log(forecast);

 


  useEffect(() => {
    if (dataOne) {
      setWeatherData({
        ...defaultWeatherData,
        temp: roundNumber(dataOne.main.temp),
        cityName: formateString(dataOne.name),
        description: formateString(dataOne.weather[0].description),
      });
    }
    if (dataTwo) {
      const weatherDates = getWeatherDates(dataTwo);
      const temperatureRanges = getTemperatureRanges(dataTwo);
      const formattedWeatherDates = getFormattedWeatherDates(weatherDates, temperatureRanges);
      setForecast(formattedWeatherDates);
    }
  }, [dataOne, dataTwo]); //eslint-disable-line

  function onSubmit(city) {
    const urlOne = getURL(city, "weather");
    const urlTwo = getURL(city, "forecast");
    submitRequest(urlOne, urlTwo);
  }

  return (
    <div className="pb-24">
      <SidebarHeader submitFormRequest={onSubmit} />
      <div className="relative">
        <img
          className="absolute min-w-full object-cover opacity-10 z-10 h-72 top-2 md:-top-6 md:h-138 lg:min-w-min lg:h-auto lg:-left-28"
          alt="background-clouds"
          src={background}
        />
      </div>
      <SidebarWeatherContent weatherData={weatherData} />
    </div>
  );
}
