export function convertDegToCardinalDirection(deg) {
  const cardinalDirections = [
    "N",
    "NE",
    "E",
    "SE",
    "S",
    "SW",
    "W",
    "NW",
  ];
  const degNum = parseFloat(deg);
  const cardinalIdx = Math.floor(((degNum + 22.5) % 360) / 45);
  return cardinalDirections[cardinalIdx];
}
