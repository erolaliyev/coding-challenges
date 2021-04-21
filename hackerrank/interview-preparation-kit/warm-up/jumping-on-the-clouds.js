function jumpingOnClouds(c) {
  let count = 0;
  for (let i = 0; i < c.length - 1; ) {
    if (c[i + 2] === 1) {
      count++;
      i++;
    } else {
      count++;
      i += 2;
    }
  }
  return count;
}
