// https://www.codewars.com/kata/551f37452ff852b7bd000139

function binaryAdd(a, b) {
  const sum = a + b;

  return toBinary(sum);
}

function toBinary(sum) {
  if (sum === 0) {
    return "0";
  }

  let binary = "";
  while (sum > 0) {
    const remainder = sum % 2;
    binary = remainder + binary;
    sum = Math.floor(sum / 2);
  }

  return binary;
}

console.log(binaryAdd(1, 0));

//   Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.
