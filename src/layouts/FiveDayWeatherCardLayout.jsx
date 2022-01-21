import React, { useContext } from 'react'
import FiveDayForecastCard from '../components/main/FiveDayForecastCard';
import { ForecastState } from "../state/providers/ForecastProvider"
import { roundNumber } from '../utilities/helperFunctions/miscHelpers';


export default function FiveDayWeatherCardLayout() {
  
  const forecast = useContext(ForecastState);
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 xl:grid-cols-5">
    {forecast.map((content, index) => (
      index === 0 ? 
      <FiveDayForecastCard
        key={index}
        date={"Tomorrow"}
        image={content.weatherImage}
        tempLow={roundNumber(content.low, 1)}
        tempHigh={roundNumber(content.high, 1)}
        />
        :
        <FiveDayForecastCard
        key={index}
        date={content.date}
        image={content.weatherImage}
        tempLow={roundNumber(content.low, 1)}
        tempHigh={roundNumber(content.high, 1)}
        />
    ))}
  </div>
  )
}
