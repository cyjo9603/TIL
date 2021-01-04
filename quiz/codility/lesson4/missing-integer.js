/**
 * @param {number[]} A
 */
function solution(A) {
  const set = new Set(A);
  let index = 1;

  while (true) {
    if (!set.has(index)) {
      return index;
    }
    index++;
  }
}

console.log(solution([1, 2, 3]));
