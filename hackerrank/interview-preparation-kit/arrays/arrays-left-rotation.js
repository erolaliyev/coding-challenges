function rotLeft(a, d) {
  return a.concat(a.splice(0, d).join(' '));
}
