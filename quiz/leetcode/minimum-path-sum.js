const minPathSum = (grid) => {
  const rowLen = grid[0].length;
  const colLen = grid.length;

  const getGridValue = (col, row) => {
    if (col < 0 || row < 0) return 10000;
    return grid[col][row];
  };

  for (let i = 0; i < colLen; i++) {
    for (let j = 0; j < rowLen; j++) {
      if (i === 0 && j === 0) continue;
      grid[i][j] += Math.min(getGridValue(i - 1, j), getGridValue(i, j - 1));
    }
  }

  return grid[colLen - 1][rowLen - 1];
};
