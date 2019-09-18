function createPhoneNumber(numbers) {
  let phoneNumber = "(";
  // append the first three numbers in the array
  phoneNumber +=
    numbers[0].toString() + numbers[1].toString() + numbers[2].toString();
  phoneNumber += ") ";
  // append the next three numbers in the array
  phoneNumber +=
    numbers[3].toString() + numbers[4].toString() + numbers[5].toString();
  phoneNumber += "-";
  // append the last four numbers in the array
  phoneNumber +=
    numbers[6].toString() +
    numbers[7].toString() +
    numbers[8].toString() +
    numbers[9].toString();

  // return phone number
  return phoneNumber;
}
