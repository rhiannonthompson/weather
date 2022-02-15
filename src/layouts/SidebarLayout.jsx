import React from "react";
import background from "../assets/images/Cloud-background.png";
import SidebarHeader from "../components/sidebar/SidebarHeader";
import SidebarWeatherContent from "../components/sidebar/SidebarWeatherContent";

export default function SidebarLayout() {
  return (
    <div className="pb-24 lg:pb-0">
      <SidebarHeader />
      <div className="relative mt-4">
        <img
          className="absolute min-w-full object-cover opacity-10 h-72 top-2 md:-top-6 md:h-138 lg:min-w-min lg:h-auto lg:-left-28"
          alt="background-clouds"
          src={background}
        />
      </div>
      <SidebarWeatherContent />
    </div>
  );
}
