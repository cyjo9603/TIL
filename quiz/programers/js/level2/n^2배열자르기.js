function solution(n, left, right) {
  let result = [];
  const loopStart = Math.floor((left - 1) / n);
  const loopEnd = Math.ceil(right / n);

  for (let i = loopStart; i < loopEnd; i++) {
    result = [...result, ...generateLineArray(i + 1, n)];
  }

  const start = left - loopStart * n;
  const end = right - loopStart * n;

  return result.slice(start, end + 1);

  function generateLineArray(line, limit) {
    return new Array(line)
      .fill(line)
      .concat(new Array(limit - line).fill().map((_, j) => j + line + 1));
  }
}
