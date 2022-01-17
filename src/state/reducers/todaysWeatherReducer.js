import {roundNumber, formateString} from "../../utilities/helperFunctions/miscHelpers"

export default function toDaysWeatherReducer(state, action) {
  switch (action.type) {
    case "SUCCESS": 
      return {
        ...state,
        temp: roundNumber(action.payload.main.temp),
        cityName: formateString(action.payload.name),
        description: formateString(action.payload.weather[0].description),
        icon: action.payload.weather[0].icon,
      }
    default: 
      return state;
  }
} 