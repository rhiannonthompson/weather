import React, { useContext } from 'react'
import FiveDayForecastCard from '../components/main/FiveDayForecastCard';
// import weatherContents from "../data/weatherDummyData";
import { ForecastState } from "../state/providers/ForecastProvider"


export default function FiveDayWeatherCardLayout() {
  
  const forecast = useContext(ForecastState);
  console.log(forecast);
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 xl:grid-cols-5">
    {forecast.map((content) => (
      <FiveDayForecastCard
        key={content.date}
        date={content.date}
        image={content.weatherImage}
        tempLow={content.low}
        tempHigh={content.high}
      />
    ))}
  </div>
  )
}
