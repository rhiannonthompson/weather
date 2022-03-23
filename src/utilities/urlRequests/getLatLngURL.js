export default function getCordsURL(type, lat, lng) {

  const URL = `/functions/weather?type=${type}&lat=${lat}&lng=${lng}`;

  return URL
}

