function solution(A) {
  A.sort((a, b) => a - b);

  return A.findIndex((num, i) => num !== i + 1) + 1 || A.length + 1;
}
