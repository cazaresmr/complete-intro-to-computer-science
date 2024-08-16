function factorial(n) {
  // Base case: if n is 1 or 0, return 1
  if (n === 1 || n === 0) {
    return 1;
  }
  // Recursive case: n * factorial(n - 1)
  return n * factorial(n - 1);
}

module.exports = factorial;
