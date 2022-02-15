function splitBy(size, list) {
  return list.reduce((acc, curr, idx, self) => {
    if ( !(idx % size)  ) {  
      return [
          ...acc,
          self.slice(idx, idx + size),
        ];
    }
    return acc;
  }, []);
}

function getAverage(numberArray) {
  const average = numberArray.reduce((a, b) => a + b, 0) / numberArray.length;
  return parseFloat(average.toFixed(2), 10);
}

function roundNumber(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

function formateString(string) {
  let lowerCase = string.toLowerCase();
  let upperCase = lowerCase.slice(0, 1).toUpperCase().concat(lowerCase.slice(1));
  return upperCase;
}

function editCityName(region) {
  const cityNameRegions = region.split(/\s-\s|,/);
  const primaryRegion = cityNameRegions[0];
  const secondaryRegions = cityNameRegions.slice(1);
  const ABBREVIATED_LENGTH = 5;
  let secondaryRegion = "";

  if (secondaryRegions.length > 1) {
    if (secondaryRegions[0].length < ABBREVIATED_LENGTH) {
      secondaryRegion = secondaryRegions[0] + secondaryRegions[secondaryRegions.length - 1];
    } else {
      secondaryRegion = secondaryRegions[secondaryRegions.length - 1].toString();
    }
  } else {
    secondaryRegion = secondaryRegions.toString();
  }
  return {
    primaryRegion: primaryRegion,
    secondaryRegion: secondaryRegion,
  }
}

export { splitBy, getAverage, roundNumber, formateString, editCityName };