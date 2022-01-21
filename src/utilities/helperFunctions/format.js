import { splitBy, getAverage } from "./miscHelpers";

function getTemperatureRanges(data) {
  if (!data) {
    return;
  }
  const todaysDay = new Date().getDate().toString();
  // filters out today's forecast
  const forecasts = data.list.filter(
    (forecast) => forecast.dt_txt.slice(8, 10) !== todaysDay
  );
  // gets only the temperature data
  const forecastTemperatures = forecasts.map((weather) => weather.main.temp);

  // splits temperature data according to day
  const temperaturesSplitByDay = splitBy(8, forecastTemperatures);

  const temperatureRanges = temperaturesSplitByDay.map((temps) => ({
    min_temp: Math.min(...temps),
    max_temp: Math.max(...temps),
    average_temp: getAverage(temps),
  }));

  return temperatureRanges;
}

function getWeatherDates(data) {
  if (!data) {
    return;
  }
  const todaysDay = new Date().getDate().toString();
  const forecastDates = data.list.filter(
    (forecast) =>
      forecast.dt_txt.slice(8, 10) !== todaysDay && forecast.dt_txt[12] === "2"
  );
  if (forecastDates.length < 5) {
    forecastDates.push(data.list[data.list.length - 1]);
  }
  return forecastDates;
}

function getFormattedWeatherDates(weatherDates, temperatureRanges) {
  // returns an array of dates
  const dates = weatherDates.map((date) => new Date(date.dt_txt).toDateString().slice(0, 10));
  //returns an array of description objects
  const weatherMetaData = weatherDates.map((date) => ({
    description: date.weather[0].description,
    icon: date.weather[0].icon,
  }));

  // zips data into one array
  const output = dates.map((date, idx) => ({
    date: date,
    weatherImage: weatherMetaData[idx].icon,
    description: weatherMetaData[idx].description,
    temp: temperatureRanges[idx].average_temp,
    low: temperatureRanges[idx].min_temp,
    high: temperatureRanges[idx].max_temp,
  }));

  return output;
}

export { getTemperatureRanges, getWeatherDates, getFormattedWeatherDates };
