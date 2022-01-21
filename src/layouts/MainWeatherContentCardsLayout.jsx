import React, {useContext} from "react";
import MainWeatherContentCard from "../components/main/MainWeatherContentCard";
import { WeatherStatsState } from "../state/providers/WeatherStatsProvider";
import { WEATHER_TYPE } from "../state/constants/weatherType";

export default function MainWeatherContentCardsLayout() {

  const weatherStats = useContext(WeatherStatsState);

  return (
    <>
      <div className="mt-18 mb-6">
        <h2 className="text-white text-2xl font-semibold">Highlights</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-12">
        {weatherStats.map((stat) => (
          <MainWeatherContentCard
            key={stat.id}
            weatherType={stat.weatherType}
            title={stat.title}
            measurement={stat.measurement}
            unitOfMeasurement={stat.unitOfMeasurement}
            direction={stat.weatherType === WEATHER_TYPE.wind && stat.direction}
            icon={stat.weatherType === WEATHER_TYPE.wind && stat.icon}
          />
        ))}
      </div>
    </>
  );
}
