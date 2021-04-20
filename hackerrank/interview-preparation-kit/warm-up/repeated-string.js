function repeatedString(s, n) {
  let reminder = n % s.length;
  let wholeStringNumber = (n - reminder) / s.length;
  let counter = 0;

  for (let index = 0; index < s.length; index++) {
    if (s[index] === 'a') {
      counter++;
    }
  }
  counter = counter * wholeStringNumber;
  for (let index = 0; index < reminder; index++) {
    if (s[index] === 'a') {
      counter++;
    }
  }
  return counter;
}
