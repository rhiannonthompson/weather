export default function weatherStatsReducer(state, action) {
  switch (action.type) {
    case "SUCCESS": {
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
            return { ...stat, measurement: action.payload.visibility};
          }
          case "pressure": {
            return { ...stat, measurement: action.payload.main.pressure };
            }
          default:
            return {
              ...stat,
            }
        }         
      })
    }
    case "FAILURE": {
      return {
        ...state,
      }
      }
    default:
      return state;
  }
}