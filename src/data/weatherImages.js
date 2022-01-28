import clear from "../assets/images/Clear.png";
import lightCloud from "../assets/images/LightCloud.png";
import heavyCloud from "../assets/images/HeavyCloud.png";
import shower from "../assets/images/Shower.png";
import lightRain from "../assets/images/LightRain.png";
import heavyRain from "../assets/images/HeavyRain.png";
import sleet from "../assets/images/Sleet.png";
import hail from "../assets/images/Hail.png";
import snow from "../assets/images/Snow.png";
import thunderstorm from "../assets/images/Thunderstorm.png";




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
    weatherImage: sleet,
    errorImage: clear,
    descriptions: [
      "Light shower sleet",
      "Sleet",
      "Shower sleet",
      "Light rain and snow",
      "Rain and snow",
    ],
  },
  {
    weatherImage: hail,
    errorImage: clear,
    descriptions: ["freezing rain"],
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
