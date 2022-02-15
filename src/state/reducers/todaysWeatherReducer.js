import { WEATHER_DISPATCH_TYPES } from "../constants/weatherDispatchTypes";

export default function toDaysWeatherReducer(state, action) {
  switch (action.type) {
    case WEATHER_DISPATCH_TYPES.success: 
      if (action.payload.isUsingLocation) {
        return {
          ...state,
          temp: action.payload.dataOne.main.temp,
          cityName: action.payload.dataOne.name,
          description: action.payload.dataOne.weather[0].description,
          icon: action.payload.dataOne.weather[0].icon,
        }
      } else {
        return {
          ...state,
          temp: action.payload.dataOne.main.temp,
          cityName: action.payload.city,
          description: action.payload.dataOne.weather[0].description,
          icon: action.payload.dataOne.weather[0].icon,
        }
      }
      case WEATHER_DISPATCH_TYPES.error: 
      return {
        ...state,
        error: action.payload,
      }
      case WEATHER_DISPATCH_TYPES.clearError: 
      return {
        ...state,
        error: null,
      }
    case WEATHER_DISPATCH_TYPES.loading: 
      return {
        ...state,
        isLoading : action.payload,
      }
    default: 
      return state;
  }
} 