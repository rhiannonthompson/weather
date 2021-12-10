import React, { useState } from "react";
import WindDirection from "./WindDirection";
import HumidityBar from "./HumidityBar";

export default function MainWeatherContentCard(props) {
  const { weatherType, title, measurement, unitOfMeasurement, direction } =
    props;

  const UNITS_OF_MEASURE = {
    metric: "metric",
    imperial: "imperial",
  };

  const TYPE = {
    wind: "wind",
    humidity: "humidity",
  };

  const [unit, setUnit] = useState("metric");

  // function handleSwitchUnitOfMeasurement() {
  //   if (unit === UNITS_OF_MEASURE.imperial) {
  //     setUnit("metric");
  //   }
  //   if (unit === UNITS_OF_MEASURE.metric) {
  //     setUnit("imperial");
  //   }
  // }

  return (
    <div className="col-span-1 bg-blue-800 text-white p-3 flex flex-col items-center place-content-center">
      <h3 className="text-xl">{title}</h3>
      <div className="text-5xl my-4 font-bold">
        {measurement}
        <span className="text-xl ml-2">
          {unit === UNITS_OF_MEASURE.metric
            ? unitOfMeasurement.metric
            : unitOfMeasurement.imperial}
        </span>
      </div>
      {weatherType === TYPE.wind && <WindDirection direction={direction}/>}
      {weatherType === TYPE.humidity && <HumidityBar measurement={measurement} />}
    </div>
  );
}
