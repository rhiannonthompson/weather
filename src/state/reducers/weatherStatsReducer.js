import { WEATHER_STATS_DISPATCH_TYPES } from "../constants/weatherDispatchTypes";

export default function weatherStatsReducer(state, action) {
  switch (action.type) {
    case WEATHER_STATS_DISPATCH_TYPES.success: {
      return state.map((stat) => {
        switch (stat.weatherType) {
          case "wind": {
            return {
              ...stat,
              measurement: action.payload.wind.speed,
              direction: action.payload.wind.deg,
            };
          }
          case "humidity": {
            return { ...stat, measurement: action.payload.main.humidity };
          }
          case "visibility": {
            return { ...stat, measurement: action.payload.visibility };
          }
          case "pressure": {
            return { ...stat, measurement: action.payload.main.pressure };
          }
          default:
            return {
              ...stat,
            };
        }
      });
    }
    case WEATHER_STATS_DISPATCH_TYPES.error: {
      return {
        ...state,
      };
    }
    case WEATHER_STATS_DISPATCH_TYPES.loading: {
      return state.map((stat) => {
        return {
          ...stat,
          isLoading: action.payload
        }
      });
    }
    default:
      return state;
  }
}
