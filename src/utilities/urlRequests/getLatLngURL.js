export default function getCordsURL(type, lat, lng) {

  const URL = `/.netlify/functions/weather?type=${type}&lat=${lat}&lng=${lng}`;

  return URL
}

