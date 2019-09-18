function solution(number) {
  const lookUp = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    600: "DC",
    900: "CM",
    1000: "M"
  };

  let roman = "";
  const keys = Object.keys(lookUp);
  while (number > 0) {
    for (let i = keys.length - 1; i >= 0; i--) {
      let romanLetter = keys[i];
      if (number >= romanLetter) {
        while (number >= romanLetter) {
          roman += lookUp[romanLetter];
          number -= romanLetter;
        }
        keys.pop();
        break;
      }
    }
  }

  return roman;
}
