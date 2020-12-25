const solution = (N, number) => {
  const NList = new Array(8).fill().map((_, i) => new Set([+String(N).repeat(i + 1)]));

  const NIndex = NList.findIndex((nSet, i) => {
    for (let j = 0; j < i; j++) {
      addNSetUnit(nSet, i, j);
    }

    return nSet.has(number);
  });

  return NIndex + 1 || -1;

  function addNSetUnit(nSet, i, j) {
    const xSet = [...NList[j]];
    const ySet = [...NList[i - j - 1]];

    xSet.forEach((x) => {
      ySet.forEach((y) => {
        nSet.add(x + y);
        nSet.add(x - y);
        nSet.add(x * y);

        if (y && x % y === 0) {
          nSet.add(x / y);
        }
      });
    });
  }
};

console.log(solution(2, 11));
