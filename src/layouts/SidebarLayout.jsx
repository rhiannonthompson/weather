import React from 'react'
import background from "../assets/images/Cloud-background.png";
import SidebarHeader from '../components/sidebar/SidebarHeader'
import SidebarWeatherContent from '../components/sidebar/SidebarWeatherContent'

export default function SidebarLayout() {
  return (
    <div>
    {/* background image */}
    <img
      className="opacity-10 absolute top-20 -left-28 z-10 w-172 h-80"
      alt="background-clouds"
      src={background}
    />
    {/* Background colour */}
    <div>
      <div className="relative bg-blue-900 h-screen w-112">

        <SidebarHeader />
        <SidebarWeatherContent/>

      </div>
    </div>
  </div>
  )
}
