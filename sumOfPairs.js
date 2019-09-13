var sum_pairs = function(numbers, sum) {
  // a place to store the pairs we encounter
  const pairs = [];
  // for each number in the array
  numbers.forEach((leftNumber, leftIndex) => {
    // iterate over the array
    for (
      let rightIndex = leftIndex + 1;
      rightIndex < numbers.length;
      rightIndex++
    ) {
      const rightNumber = numbers[rightIndex];
      // add the two values
      // if they are equal to sum
      if (leftNumber + rightNumber == sum) {
        // store the numbers and the right index
        pairs.push({
          pair: [leftNumber, rightNumber],
          rightIndex
        });
      }
    }
  });

  if (pairs.length > 0) {
    let earliestPair = pairs[0];
    for (let i = 1; i < pairs.length; i++) {
      if (earliestPair.rightIndex > pairs[i].rightIndex) {
        earliestPair = pairs[i];
      }
    }
    // return the earliest pair (lowest second index)
    return earliestPair.pair;
  }
  return undefined;
};
