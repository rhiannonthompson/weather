import React, { useContext } from "react";
import { UnitOfMeasureDispatch } from "../../state/providers/UnitOfMeasureProvider";

export default function MainHeader() {
  const dispatchUnitOfMeasure = useContext(UnitOfMeasureDispatch);

  function handleClickToMetric() {
    dispatchUnitOfMeasure(true);
  }

  function handleClickToImperial() {
    dispatchUnitOfMeasure(false);
  }

  return (
    <div className="flex pt-8 justify-end">
      <div className="mx-6">
        <button
          className="py-2 px-3 rounded-full bg-white"
          onClick={handleClickToMetric}
        >
          ℃
        </button>
      </div>
      <div>
        <button
          className="py-2 px-3 rounded-full bg-gray-400"
          onClick={handleClickToImperial}
        >
          ℉
        </button>
      </div>
    </div>
  );
}
