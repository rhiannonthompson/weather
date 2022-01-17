import React from "react";
import { format } from "fecha";
import getCurrentDate from "../../utilities/helperFunctions/getCurrentDate";
import clearImage from "../../assets/images/Clear.png"

export default function SidebarWeatherContent({weatherData}) {
  //todo will be done with state management

  const formatDate = format(getCurrentDate(), "ddd D MMM");
  const { temp, description, cityName } = weatherData;

  return (
    <div className="flex flex-col items-center mt-18 md:mt-28 lg:mt-20">
      <img
        className="w-36 md:w-52 lg:w-44"
        alt="current-weather"
        src={clearImage}
      />
      <div className="mt-10 md:mt-18 ml-4">
        <p className="text-8xl font-semibold text-white">
          {temp}
          <span className="text-5xl text-gray-400">°c</span>
        </p>
      </div>
      <div className="mt-10 md:mt-18">
        <p className="text-3xl font-semibold text-gray-400">{description}</p>
      </div>
      <div className="flex w-2/3 justify-center mt-10 md:mt-18 text-xl font-semibold text-gray-400 mb-6">
        <div className="text-right">Today</div>
        <div className="text-center px-4">-</div>
        <div className="text-left">{formatDate}</div>
      </div>
      <div>
        <p className="text-3xl font-semibold text-gray-400">{cityName}</p>
      </div>
    </div>
  );
}
