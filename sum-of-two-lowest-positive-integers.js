// iterate over numbers starting with the 3rd number
for (let i = 2; i < numbers.length; i++) {
  const currentNumber = numbers[i];
  // if the current number is smaller than the smallest number
  if (currentNumber < smallest) {
    // set smallest number to be the 2nd smallest number
    secondSmallest = smallest;
    // set the current number to be the smallest number
    smallest = currentNumber;
  } else if (currentNumber < secondSmallest) {
    // else if the current number is smaller than the 2nd smallest number
    // set the 2nd smallest number to the current number
    secondSmallest = currentNumber;
  }
}

console.log(smallest, secondSmallest);
