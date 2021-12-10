import weatherHail from "../assets/images/Hail.png";
import weatherStorm from "../assets/images/Thunderstorm.png";
import weatherClear from "../assets/images/Clear.png";
import weatherLightCloud from "../assets/images/LightCloud.png";
import weatherHeavyCloud from "../assets/images/HeavyCloud.png";


const weatherContents = [
  {
    id: 1,
    date: "Tomorrow",
    weatherImage: weatherClear,
    low: "4",
    high: "6",
  },
  {
    id: 2,
    date: "1st Jan",
    weatherImage: weatherHail,
    low: "-4",
    high: "1",
  },
  {
    id: 3,
    date: "2nd Jan",
    weatherImage: weatherStorm,
    low: "-1",
    high: "2",
  },
  {
    id: 4,
    date: "3rd Jan",
    weatherImage: weatherLightCloud,
    low: "4",
    high: "6",
  },
  {
    id: 5,
    date: "4th Jan",
    weatherImage: weatherHeavyCloud,
    low: "10",
    high: "14",
  },
];

export default weatherContents;