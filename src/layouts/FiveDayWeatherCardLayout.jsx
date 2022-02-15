import React, { useContext } from "react";
import FiveDayForecastCard from "../components/main/FiveDayForecastCard";
import { ForecastState } from "../state/providers/ForecastProvider";
import { UnitOfMeasureState } from "../state/providers/UnitOfMeasureProvider";

export default function FiveDayWeatherCardLayout() {
  const forecast = useContext(ForecastState);
  const isMetric = useContext(UnitOfMeasureState);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 xl:grid-cols-5">
      {forecast.map((content) => (
        <FiveDayForecastCard
          key={content.id}
          date={content.date}
          tempLow={content.low}
          tempHigh={content.high}
          description={content.description}
          isLoading={content.isLoading}
          isMetric={isMetric}
        />
      ))}
    </div>
  );
}
