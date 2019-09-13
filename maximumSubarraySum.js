var maxSequence = function(arr) {
  // initialize maxSum to 0
  let maxSum = arr[0];

  // iterate from 0 to end of array - i
  for (let i = 0; i < arr.length; i++) {
    // iterate from current index to end of array - j
    for (let j = i; j < arr.length; j++) {
      // place to store sum of current subarray
      let currentSum = 0;
      // iterate from i to j
      for (let k = i; k < j; k++) {
        // sum all numbers
        currentSum += arr[k];
      }
      // if currentSum is greater than maxSum
      if (currentSum > maxSum) {
        // set MaxSum
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
};
