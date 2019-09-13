function humanReadable(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds = totalSeconds % 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const padNumber = number => {
    let numberString = number.toString();
    if (numberString.length == 1) {
      numberString = "0" + numberString;
    }
    return numberString;
  };

  return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
}
