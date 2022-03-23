const axios = require("axios");
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


exports.handler = async function (event, context) {
  
  try {
    const { type, lat, lng } = event.queryStringParameters;
  
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/${type}?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`);
    
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    }
  }
}

