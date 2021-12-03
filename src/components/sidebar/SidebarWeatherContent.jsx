import React from 'react'
import currentWeather from "../../assets/images/Shower.png";


export default function SidebarWeatherContent() {
  return (
    <div className="flex flex-col items-center mt-20">
    <img
      className="w-44"
      alt="current-weather"
      src={currentWeather}
    />
    <div className="mt-18 ml-4">
      <p className="text-8xl font-semibold text-white">
        15
        <span className="text-5xl text-gray-400">°c</span>      
      </p>
    </div>
    <div className="mt-18">
      <p className="text-3xl font-semibold text-gray-400">
        Showers
      </p>
    </div>
    <div className="mt-18">
      <div className="text-xl font-semibold text-gray-400 mb-6">
        <div className="relative w-56">
          <span className="absolute left-10">Today</span>
          <span className="absolute left-1/2 w-10 text-center transform -translate-x-1/2">•</span>
          <span className="absolute left-32 w-24">Fri 5 Jun</span>
           
        </div>
      </div>
    </div>
    <div className="mt-4">
      <p className="text-xl font-semibold text-gray-400">
        Dublin
      </p>
    </div>
  </div>
  )
}
