function solution(arr) {
  const avg = arr.reduce((sum, number) => sum + number, 0) / arr.length;
  return avg;
}

console.log(solution([1, 2, 3, 4]));
