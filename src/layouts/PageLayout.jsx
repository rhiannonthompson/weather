import React from "react";
import SidebarLayout from "./SidebarLayout";
import MainHeader from "../components/main/MainHeader";
import MainSectionLayout from "./MainSectionLayout";
import { TodaysWeatherProvider } from "../state/providers/TodaysWeatherProvider";
import { ForecastProvider } from "../state/providers/ForecastProvider";

export default function PageLayout() {
  return (
    <ForecastProvider>
      <div className="lg:flex flex-col lg:flex-row relative">
        <div className="bg-blue-900 min-h-screen lg:flex-none lg:w-104 xl:w-130">
          <TodaysWeatherProvider>
            <SidebarLayout />
          </TodaysWeatherProvider>
        </div>
        <div className="bg-blue-600 min-h-screen justify-center lg:flex-grow z-10">
          <div className="mx-6 md:mx-8 lg:mx-10 xl:mx-32">
            <MainHeader />
            <MainSectionLayout />
          </div>
        </div>
      </div>
    </ForecastProvider>
  );
}
