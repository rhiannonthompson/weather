import React from "react";
import FiveDayWeatherCardLayout from "./FiveDayWeatherCardLayout";
import MainWeatherContentCardsLayout from "./MainWeatherContentCardsLayout";

export default function MainSectionLayout() {
  return (
    <>
      <div className="mt-8">
        <FiveDayWeatherCardLayout/>
      </div>
      <MainWeatherContentCardsLayout/> 
    </>
  );
}
