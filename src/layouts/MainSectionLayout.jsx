import React from "react";
import FiveDayWeatherCardLayout from "./FiveDayWeatherCardLayout";
import MainWeatherContentCardsLayout from "./MainWeatherContentCardsLayout";

export default function MainSectionLayout({ ...props }) {
  return (
    <>
      <div className="mt-10">
        <FiveDayWeatherCardLayout/>
      </div>
      <MainWeatherContentCardsLayout/> 
    </>
  );
}
