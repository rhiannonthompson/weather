import { useReducer, createContext } from "react";

import { defaultWeatherData } from "../../data/defaultWeatherData";
import toDaysWeatherReducer from "../reducers/todaysWeatherReducer";

export const TodaysWeatherState = createContext();
export const TodaysWeatherDispatch = createContext();

export function TodaysWeatherProvider({ children }) {
  const [todaysWeather, dispatchTodaysWeather] = useReducer(
    toDaysWeatherReducer,
    defaultWeatherData
  );

  return (
    <TodaysWeatherDispatch.Provider value={dispatchTodaysWeather}>
      <TodaysWeatherState.Provider value={todaysWeather}>
        {children}
      </TodaysWeatherState.Provider>
    </TodaysWeatherDispatch.Provider>
  );
}

