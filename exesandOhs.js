// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
  if (!str) return true;
  const xRegexp = new RegExp("x", "i");
  const oRegexp = new RegExp("o", "i");
  return str.split("").reduce(
    ({ xCount, oCount }, letter, index) => {
      if (letter.match(xRegexp)) {
        xCount++;
      } else if (letter.match(oRegexp)) {
        oCount++;
      }
      if (index < str.length - 1) {
        return { xCount, oCount };
      } else {
        return xCount === oCount;
      }
    },
    { xCount: 0, oCount: 0 }
  );
}

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
