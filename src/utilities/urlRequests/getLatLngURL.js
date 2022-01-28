export default function getCordsURL(type, lat, lng) {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  // todo convert location to city id

  const URL = `https://api.openweathermap.org/data/2.5/${type}?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`;

  return URL
}