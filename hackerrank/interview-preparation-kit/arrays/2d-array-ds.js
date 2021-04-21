function hourglassSum(arr) {
  // we could set this to 3 given the problems constraings, but this allows changes
  const maxX = 3; // + (arr[0].length % 3)
  const maxY = 3; // + (arr.length % 3)
  let total = -Infinity; // has to be -64, but

  // begin at x == 0
  for (let x = 0; x <= maxX; x++) {
    for (let y = 0; y <= maxY; y++) {
      // sum the top of hourglass
      let sum = arr[x][y] + arr[x][y + 1] + arr[x][y + 2];

      // get the middle of hourglass
      sum += arr[x + 1][y + 1];

      // sum the bottom of hourglass
      sum += arr[x + 2][y] + arr[x + 2][y + 1] + arr[x + 2][y + 2];

      // don't store result to keep space complexity down
      if (total < sum) total = sum;
    }
  }

  return total;
}
