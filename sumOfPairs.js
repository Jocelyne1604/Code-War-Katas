var sum_pairs = function(numbers, sum) {
  // a place to keep track of the numbers we have seen
  const seenNumbers = {};
  // iterate over the numbers
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    // subtract current number from sum to get the number we need
    const need = sum - currentNumber;
    // check to see if we've seen the number we need before
    if (seenNumbers[need]) {
      // if we have return the pair
      return [need, currentNumber];
    } else {
      // if not, set number as seen
      seenNumbers[currentNumber] = true;
    }
  }
  // return undefined
};
