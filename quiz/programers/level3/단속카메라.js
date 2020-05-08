function solution(routes) {
  const result = [];
  routes
    .sort((a, b) => a[0] - b[0])
    .forEach((v) => {
      if (result.length !== 0 && result[result.length - 1][1] >= v[0]) {
        return result.splice(result.length - 1, 1, [Math.max(result[result.length - 1][0], v[0]), Math.min(result[result.length - 1][1], v[1])]);
      }
      result.push(v);
    });

  return result.length;
}

console.log(
  solution([
    [-20, 15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);
