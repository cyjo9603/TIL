function solution(A, B) {
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);
  let score = 0;
  let index = 0;

  while (A.length) {
    const currentA = A.pop();

    if (B[B.length - 1] < currentA) {
      continue;
    }
    for (let i = index; i < B.length; i++) {
      if (B[i] > currentA) {
        index = i + 1;
        score++;
        break;
      }
    }
  }

  return score;
}
