import { getTemperatureRanges, getWeatherDates, getFormattedWeatherDates } from "../../utilities/helperFunctions/format"

export default function forecastReducer(state, action) {
  switch (action.type) {
    case "SUCCESS": {
      const weatherDates = getWeatherDates(action.payload);
      const temperatureRanges = getTemperatureRanges(action.payload);
      const formattedWeatherDates = getFormattedWeatherDates(weatherDates, temperatureRanges);
      return [
        ...formattedWeatherDates
      ]
    }
    default:
      return state;
  }
}