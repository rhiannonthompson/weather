const weatherStats = [
  {
    id: 1,
    weatherType: "wind",
    title: "wind status",
    measurement: 7,
    
    unitOfMeasurement: {
      metric: "km/h",
      imperial: "mph",
    },

    direction: {
      icon: "w",
      text: "w"
    }      
  },
  {
    id: 2,
    weatherType: "humidity",
    title: "humidity",
    measurement: 75,
    unitOfMeasurement: {
      metric: "%",
      imperial: "%",
    },
    
  },
  {
    id: 3,
    weatherType: "visability",
    title: "visability",
    measurement: 6.5,
    unitOfMeasurement: {
      metric: "km/h",
      imperial: "mph",
    },
  },
  {
    id: 4,
    weatherType: "pressure",
    title: "air pressure",
    measurement: 998,
    unitOfMeasurement: {
      metric: "mb",
      imperial: "mb",
    },
  },
];

export default weatherStats;