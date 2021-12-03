
export default function getURL(location) {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  // todo convert location to city id
  
  const city = location;

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  return URL;

}