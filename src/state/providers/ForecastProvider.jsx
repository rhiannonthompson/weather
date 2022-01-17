import { useReducer, createContext } from "react";

import { defaultForecastData } from "../../data/defaultForecastData";
import forecastReducer from "../reducers/forecastReducer";

export const ForecastState = createContext();
export const ForecastDispatch = createContext();

export function ForecastProvider({ children }) {
  const [forecast, dispatchForecast] = useReducer(forecastReducer, defaultForecastData);

  return (
    <ForecastDispatch.Provider value={dispatchForecast}>
      <ForecastState.Provider value={forecast}>
        {children}
      </ForecastState.Provider>
    </ForecastDispatch.Provider>
  );
}
