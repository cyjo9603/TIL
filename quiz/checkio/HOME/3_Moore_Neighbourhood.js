function countNeighbours(inputArray, col, row) {
  let count = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (col + i > -1 && row + j > -1 && col + i < inputArray.length && row + j < inputArray[0].length && !isDiffrent(i, j)) {
        if (inputArray[col + i][row + j] === 1) {
          count++;
        }
      }
    }
  }
  console.log(inputArray.length);
  return count;
}
function isDiffrent(i, j) {
  if (i === j && i === 0) {
    return true;
  }
}

console.log(
  countNeighbours(
    [
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0],
    ],
    5,
    4
  )
);
