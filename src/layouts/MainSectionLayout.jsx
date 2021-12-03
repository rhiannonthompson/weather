import React from 'react'
import MainWeatherContentCardsLayout from './MainWeatherContentCardsLayout'

export default function MainSectionLayout({...props}) {
  return (
    <div className="flex justify-center mt-20">
    <MainWeatherContentCardsLayout/>
  </div>
  )
}
