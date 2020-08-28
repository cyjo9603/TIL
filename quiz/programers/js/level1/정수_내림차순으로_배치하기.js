function solution(n) {
  return parseInt(
    Array.from(String(n))
      .sort((a, b) => b - a)
      .join('')
  );
}

console.log(solution(118372));
