function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// with cache:

function factorial2(n) {
  if (!this.cache) {
    this.cache = {};
  }

  if (this.cache[n]) {
    return this.cache[n];
  }

  if (n === 1) {
    return 1;
  }

  this.cache[n] = n * factorial2(n - 1);
  return this.cache[n];
}
