import clear from "../assets/images/day.svg";
import lightCloud from "../assets/images/cloudy-day-3.svg";
import heavyCloud from "../assets/images/cloudy.svg";
import shower from "../assets/images/rainy-1.svg";
import lightRain from "../assets/images/rainy-4.svg";
import heavyRain from "../assets/images/rainy-6.svg";
import hail from "../assets/images/rainy-7.svg";
import snow from "../assets/images/snowy-5.svg";
import thunderstorm from "../assets/images/thunder.svg";


export function selectWeatherImageFromDescription(inputDescription, weatherImages) {
  const lowerCaseDescription = inputDescription.toLowerCase();
  let weatherImage;
  for (let i = 0; i < weatherImages.length; i++) {   
    for (let j = 0; j < weatherImages[i].descriptions.length; j++){
      if (weatherImages[i].descriptions[j] === lowerCaseDescription) {
        return weatherImage = weatherImages[i].weatherImage;
      } 
    }
  }
  if (!weatherImage) {
    for (let i = 0; i < weatherImages.length; i++) {
      return weatherImage = weatherImages[i].errorImage  
    }
  }
}

export const weatherTypeImages = [
  {
    weatherImage: clear,
    errorImage: clear,
    descriptions: ["clear sky"],
  },
  {
    weatherImage: lightCloud,
    errorImage: clear,
    descriptions: ["few clouds", "scattered clouds"],
  },
  {
    weatherImage: heavyCloud,
    errorImage: clear,
    descriptions: ["broken clouds", "overcast clouds"],
  },
  {
    weatherImage: heavyCloud,
    errorImage: clear,
    descriptions: [
      "mist",
      "smoke",
      "haze",
      "sand/ dust whirls",
      "fog",
      "sand",
      "dust",
      "volcanic ash",
      "squalls",
      "tornado",
    ],
  },
  {
    weatherImage: shower,
    errorImage: clear,
    descriptions: [
      "shower rain",
      "light intensity shower rain",
      "shower drizzle",
      "heavy intensity shower rain",
      "ragged shower rain",
    ],
  },
  {
    weatherImage: lightRain,
    errorImage: clear,
    descriptions: [
      "light rain",
      "light intensity drizzle",
      "drizzle",
      "light intensity drizzle rain",
      "drizzle rain",
    ],
  },
  {
    weatherImage: heavyRain,
    errorImage: clear,
    descriptions: [
      "heavy intensity drizzle",
      "heavy intensity drizzle rain",
      "shower rain and drizzle",
      "heavy shower rain and drizzle",
      "moderate rain",
      "heavy intensity rain",
      "very heavy rain",
      "extreme rain",
    ],
  },
  {
    weatherImage: hail,
    errorImage: clear,
    descriptions: [
      "light shower sleet",
      "sleet",
      "shower sleet",
      "light rain and snow",
      "rain and snow",
      "freezing rain",
    ],
  },
  {
    weatherImage: snow,
    errorImage: clear,
    descriptions: [
      "light snow",
      "snow",
      "heavy snow",
      "light shower snow",
      "shower snow",
      "heavy shower snow",
    ],
  },
  {
    weatherImage: thunderstorm,
    errorImage: clear,
    descriptions: [
      "thunderstorm with light rain",
      "thunderstorm with rain",
      "thunderstorm with heavy rain",
      "light thunderstorm",
      "thunderstorm",
      "heavy thunderstorm",
      "ragged thunderstorm",
      "thunderstorm with light drizzle",
      "thunderstorm with drizzle",
      "thunderstorm with heavy drizzle",
    ],
  },
];
