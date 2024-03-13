function intDivide(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }
  return 1 + intDivide(dividend - divisor, divisor);
}

console.log(intDivide(13, 4)); // 5
