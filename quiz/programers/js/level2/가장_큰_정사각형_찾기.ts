function solution(board: number[][]): number {
  const initCheck: number = allSumCheck(board);
  const width: number = board[0].length;
  const height: number = board.length;
  let length: number = 0;
  if (initCheck === 0) return 0;
  else if (initCheck === width * height) return Math.pow(width > height ? height : width, 2);

  for (let col = 1; col < height; col++) {
    for (let row = 1; row < width; row++) {
      if (board[col][row] > 0) {
        const min: number = Math.min(
          board[col - 1][row - 1],
          board[col][row - 1],
          board[col - 1][row]
        );
        board[col][row] = min + 1;
      }
      if (length < board[col][row]) {
        length = board[col][row];
      }
    }
  }
  return Math.pow(length, 2);
}

function allSumCheck(board: number[][]): number {
  return board.reduce(
    (boardSum: number, row: number[]): number =>
      boardSum + row.reduce((sum: number, value: number): number => sum + value, 0),
    0
  );
}
//console.log(solution([[0, 0, 1, 1], [1, 1, 1, 1]]));
//console.log(getZeroIndex([[0, 0, 0, 0], [0, 0, 0, 0]]));
