import { useState, createContext } from "react";


export const UnitOfMeasureState = createContext();
export const UnitOfMeasureDispatch = createContext();

export function UnitOfMeasureProvider({ children }) {

  const [isMetric, setIsMetric] = useState("false");

  return (
    <UnitOfMeasureDispatch.Provider value={setIsMetric}>
      <UnitOfMeasureState.Provider value={isMetric}>
        {children}
      </UnitOfMeasureState.Provider>
    </UnitOfMeasureDispatch.Provider>
  );
}