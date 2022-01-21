
export default function toDaysWeatherReducer(state, action) {
  switch (action.type) {
    case "SUCCESS": 
      return {
        ...state,
        temp: action.payload.main.temp,
        cityName: action.payload.name,
        description: action.payload.weather[0].description,
        icon: action.payload.weather[0].icon,
      }
    default: 
      return state;
  }
} 