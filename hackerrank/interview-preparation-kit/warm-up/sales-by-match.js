function sockMerchant(n, ar) {
  let ones = {},
    pairs = 0;
  for (let i = 0; i < n; i++) {
    if (ones.hasOwnProperty(ar[i])) {
      pairs++;
      delete ones[ar[i]];
    } else {
      ones[ar[i]] = 0;
    }
  }
  return pairs;
}
