function solution(A) {
  if (A.length === 0) return -1;
  const absoluteMap = A.reduce((map, a, i) => {
    const current = map.get(a);
    if (current) current.push(i);
    else map.set(a, [i]);
    return map;
  }, new Map());

  const absolute = [...absoluteMap.entries()].filter(([, arr]) => arr.length > A.length / 2);
  if (absolute.length !== 1) {
    return -1;
  }

  return absolute[0][1][0];
}

console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]) === 0);
console.log(solution([]) === -1);
console.log(solution([2147483647]) === 0);
console.log(solution([2, 1, 1, 3]) === -1);
