// https://www.codewars.com/kata/mumbling/train/javascript

function accum(input) {
  // a place to store the result
  let result = "";
  // iterate over the string
  for (let index = 0; index < input.length; index++) {
    const currentLetter = input[index];
    // append the current letter i+1 times to the string
    const totalCount = index + 1;
    for (let counter = 0; counter < totalCount; counter++) {
      // capitalize the first append
      if (counter == 0) {
        result += currentLetter.toUpperCase();
      } else {
        result += currentLetter.toLowerCase();
      }
    }

    // append a dash if it is not the last letter
    if (index != input.length - 1) {
      result += "-";
    }
  }

  return result;
}

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
