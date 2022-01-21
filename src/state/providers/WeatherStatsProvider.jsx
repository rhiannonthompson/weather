import { useReducer, createContext } from "react";
import { defaultWeatherStats } from "../../data/defaultWeatherStats";
import weatherStatsReducer from "../reducers/weatherStatsReducer";


export const WeatherStatsState = createContext();
export const WeatherStatsDispatch = createContext();

export function WeatherStatsProvider({ children }) {
  const [weatherStats, dispatchWeatherStats] = useReducer(weatherStatsReducer, defaultWeatherStats);

  return (
    <WeatherStatsDispatch.Provider value={dispatchWeatherStats}>
      <WeatherStatsState.Provider value={weatherStats}>
        {children}
      </WeatherStatsState.Provider>
    </WeatherStatsDispatch.Provider>
  );
}
