export const defaultWeatherStats = [
  {
    id: 1,
    isLoading: false,
    weatherType: "wind",
    title: "wind status",
    measurement: 7,
    direction: 292.5,
    icon: "w",
    
    unitOfMeasurement: {
      metric: "km/h",
      imperial: "mph",
    },     
  },
  {
    id: 2,
    isLoading: false,
    weatherType: "humidity",
    title: "humidity",
    measurement: 75,
    unitOfMeasurement: {
      metric: "%",
      imperial: "%"
    },   
  },
  {
    id: 3,
    isLoading: false,
    weatherType: "visibility",
    title: "visibility",
    measurement: 6000,
    unitOfMeasurement: {
      metric: "km",
      imperial: "mph",
    },
  },
  {
    id: 4,
    isLoading: false,
    weatherType: "pressure",
    title: "air pressure",
    measurement: 998,
    unitOfMeasurement: {
      metric: "mb",
      imperial: "mb"
    },
  },
];

