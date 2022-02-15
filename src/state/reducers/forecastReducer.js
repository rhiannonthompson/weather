import {
  getTemperatureRanges,
  getWeatherDates,
  getFormattedWeatherDates,
} from "../../utilities/helperFunctions/format";
import {FORECAST_DISPATCH_TYPES} from "../constants/weatherDispatchTypes"

export default function forecastReducer(state, action) {
  switch (action.type) {
    case FORECAST_DISPATCH_TYPES.success: {
      const weatherDates = getWeatherDates(action.payload);
      const temperatureRanges = getTemperatureRanges(action.payload);
      const formattedWeatherDates = getFormattedWeatherDates(
        weatherDates,
        temperatureRanges
      );
      return [...formattedWeatherDates];
    }
    case FORECAST_DISPATCH_TYPES.loading: {
      return state.map((stat) => {
        return {
          ...stat,
          isLoading : action.payload,
        };
      });
    }
    default:
      return state;
  }
}
