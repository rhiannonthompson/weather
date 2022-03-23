import React, { useContext } from "react";
import MainWeatherContentCard from "../components/main/MainWeatherContentCard";
import { WeatherStatsState } from "../state/providers/WeatherStatsProvider";
import { WEATHER_TYPE } from "../state/constants/weatherType";
import { UnitOfMeasureState } from "../state/providers/UnitOfMeasureProvider";

export default function MainWeatherContentCardsLayout() {

  const weatherStats = useContext(WeatherStatsState);
  const isMetric = useContext(UnitOfMeasureState);

  // todo refactor to remove prop drilling
  return (
    <>
      <div className="mt-12 mb-6">
        <h2 className="text-text-white text-2xl font-light">Today's Highlights</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-12">
        {weatherStats.map((stat) => (
          <MainWeatherContentCard
            key={stat.id}
            weatherType={stat.weatherType}
            title={stat.title}
            measurement={stat.measurement}
            unitOfMeasurement={stat.unitOfMeasurement}
            direction={stat.weatherType === WEATHER_TYPE.wind && stat.direction}
            icon={stat.weatherType === WEATHER_TYPE.wind && stat.icon}
            isMetric={isMetric}
            isLoading={stat.isLoading}
          />
        ))}
      </div>
    </>
  );
}
