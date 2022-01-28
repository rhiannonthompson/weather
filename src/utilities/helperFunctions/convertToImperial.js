function convertToFahrenheit(temp) {
  const fahrenheit = (temp * 9 / 5) + 32;
  return fahrenheit;
}

function convertToMiles(distance) {
  const miles = distance * 0.62137;
  return miles;
}

export { convertToFahrenheit, convertToMiles };