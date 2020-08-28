function solution(n, s) {
  const result = [];
  const line = new Array(n).fill(null).map((v, i) => i + 1);
  let numberOfCase = line.reduce((p, v) => p * v, 1);

  while (line.length) {
    numberOfCase /= line.length;
    const currentIndex = Math.ceil(s / numberOfCase);
    s %= numberOfCase;
    if (currentIndex) {
      result.push(line[currentIndex - 1]);
      line.splice(currentIndex - 1, 1);
    } else {
      result.push(line.pop());
    }
  }
  return result;
}
