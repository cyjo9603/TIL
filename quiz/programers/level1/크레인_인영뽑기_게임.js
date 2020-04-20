function solution(board, moves) {
  let answer = 0;
  const basket = [];

  moves.forEach((v) => {
    let i = 0;
    for (i; i < board[0].length; i++) {
      const value = board[i][v - 1];
      if (value !== 0) {
        board[i][v - 1] = 0;
        if (basket[basket.length - 1] === value) {
          answer += 2;
          return basket.pop();
        }
        return basket.push(value);
      }
    }
  });

  return answer;
}

const test1 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const test2 = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(test1, test2));
