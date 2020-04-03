function indexPower(inputArray, N) {
  if (inputArray.length > N) {
    return Math.pow(inputArray[N], N);
  }
  return -1;
}

console.log(indexPower([1, 2], 3));
