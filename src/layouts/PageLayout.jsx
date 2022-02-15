import React from "react";
import SidebarLayout from "./SidebarLayout";
import MainHeader from "../components/main/MainHeader";
import MainSectionLayout from "./MainSectionLayout";
import { TodaysWeatherProvider } from "../state/providers/TodaysWeatherProvider";
import { ForecastProvider } from "../state/providers/ForecastProvider";
import { WeatherStatsProvider } from "../state/providers/WeatherStatsProvider";
import { UnitOfMeasureProvider } from "../state/providers/UnitOfMeasureProvider";

export default function PageLayout() {
  return (
    <UnitOfMeasureProvider>
      <ForecastProvider>
        <WeatherStatsProvider>
          <div className="lg:flex flex-col lg:flex-row relative font-Raleway">
            <div className="bg-secondary-dark-blue min-h-screen lg:flex-none lg:w-104 xl:w-130">
              <TodaysWeatherProvider>
                <SidebarLayout />
              </TodaysWeatherProvider>
            </div>
            <div className="bg-main-dark-blue min-h-screen justify-center lg:flex-grow z-10">
              <div className="mx-6 md:mx-8 lg:mx-10 xl:mx-32">
                <MainHeader />
                <MainSectionLayout />
              </div>
            </div>
          </div>
        </WeatherStatsProvider>
      </ForecastProvider>
    </UnitOfMeasureProvider>
  );
}
