function solution(A, B) {
  let count = 0;
  let lastSize;
  const down = [];
  for (let i = 0; i < A.length; i++) {
    if (B[i] === 1) {
      down.push(A[i]);
      continue;
    }
    while (down.length !== 0) {
      lastSize = down[down.length - 1];
      if (lastSize > A[i]) break;
      down.pop();
    }
    if (down.length === 0) count++;
  }

  return count + down.length;
}

console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]) === 2);
console.log(solution([0, 1], [1, 1]) === 2);
