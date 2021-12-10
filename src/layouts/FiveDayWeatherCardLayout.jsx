import React from 'react'
import FiveDayForecastCard from '../components/main/FiveDayForecastCard';
import weatherContents from "../data/weatherDummyData";


export default function FiveDayWeatherCardLayout() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 xl:grid-cols-5">
    {weatherContents.map((content) => (
      <FiveDayForecastCard
        key={content.id}
        date={content.date}
        image={content.weatherImage}
        tempLow={content.low}
        tempHigh={content.high}
      />
    ))}
  </div>
  )
}
