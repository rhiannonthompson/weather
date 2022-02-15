import React, { useContext, useState } from "react";
import { UnitOfMeasureDispatch } from "../../state/providers/UnitOfMeasureProvider";

export default function MainHeader() {
  const dispatchUnitOfMeasure = useContext(UnitOfMeasureDispatch);
  const [isMetricActive, setMetricIsActive] = useState(true);
  const [isImperialActive, setIsImperialActive] = useState(false);

  function handleClickToMetric() {
    dispatchUnitOfMeasure(true);
    setIsImperialActive(false);
    setMetricIsActive(true);
  }

  function handleClickToImperial() {
    dispatchUnitOfMeasure(false);
    setIsImperialActive(true);
    setMetricIsActive(false);
  }

  return (
    <div className="flex pt-8 justify-end text-xl">
      <div className="mx-6">
        <button
          className={
            isMetricActive
              ? "py-2 px-3 rounded-full font-semibold bg-text-white text-black cursor-default"
              : "py-2 px-3 rounded-full font-semibold bg-primary-gray text-text-white hover:bg-text-gray" 
          }
          onClick={handleClickToMetric}
        >
          °C
        </button>
      </div>
      <div>
        <button
          className={
            isImperialActive
              ? "py-2 px-3 rounded-full font-semibold bg-text-white text-black cursor-default"
              : "py-2 px-3 rounded-full font-semibold bg-primary-gray text-text-white hover:bg-text-gray"
          }
          onClick={handleClickToImperial}
        >
          °F
        </button>
      </div>
    </div>
  );
}
