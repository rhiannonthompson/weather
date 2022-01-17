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

function roundNumber(number) {
  return Math.round(number);
}

function formateString(string) {
  let upperCase = string.slice(0, 1).toUpperCase().concat(string.slice(1));
  return upperCase;
}

export { splitBy, getAverage, roundNumber, formateString };