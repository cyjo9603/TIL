function solution(A, K) {
  const rotateCount = K % A.length;
  let result = A;

  for (let i = 0; i < rotateCount; i++) {
    result = rotateArray(result);
  }

  return result;
}

function rotateArray(array) {
  const _array = [...array];
  _array.unshift(_array.pop());
  return _array;
}

console.log(solution([0, 0, 0], 2));
