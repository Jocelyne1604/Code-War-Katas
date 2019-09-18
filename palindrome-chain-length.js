var palindromeChainLength = function(n) {
  // a function to check if a palindrome
  const reverse = number =>
    +number
      .toString()
      .split("")
      .reverse()
      .join("");

  const isPalindrome = number => {
    return number == reverse(number);
  };
  // a place to store the counts
  let count = 0;
  let currentNum = n;
  // currentNum
  // while the currentNum is not a palindrome
  while (!isPalindrome(currentNum)) {
    // set currentNum to reversed num + currentNum
    currentNum = reverse(currentNum) + currentNum;
    // increment counts
    count++;
  }
  // return counts;
  return count;
};

console.log(palindromeChainLength(87) == 4);
