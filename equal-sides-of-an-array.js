function findEvenIndex(arr) {
  const sumSubArray = (arr, start, end) => {
    let sum = 0;
    for (let index = start; index < end; index++) {
      sum += arr[index];
    }
    return sum;
  };

  for (let index = 0; index < arr.length; index++) {
    const leftSum = sumSubArray(arr, 0, index);
    const rightSum = sumSubArray(arr, index + 1, arr.length);
    if (leftSum == rightSum) {
      return index;
    }
  }
  return -1;
}
