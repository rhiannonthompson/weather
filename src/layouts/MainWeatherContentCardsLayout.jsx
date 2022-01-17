import React from "react";
import MainWeatherContentCard from "../components/main/MainWeatherContentCard";
import weatherStats from "../data/weatherStatsDummyData";

export default function MainWeatherContentCardsLayout() {
  return (
    <>
      <div className="mt-18 mb-6">
        <h2 className="text-white text-2xl font-semibold">
          Highlights
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-12">
      
        {weatherStats.map((stat) =>
          <MainWeatherContentCard
            key={stat.id}
            weatherType={stat.weatherType}
            title={stat.title}
            measurement={stat.measurement}
            unitOfMeasurement={stat.unitOfMeasurement}
            direction={stat.direction ? stat.direction : null}
          />
        )}
      </div>


    </>
  );
}
