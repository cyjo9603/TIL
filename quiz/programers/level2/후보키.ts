function solution(relation: string[][]) {
  const indexList: boolean[][] = getIndex(relation[0].length);
  const candidateKey: number[][] = [];
  indexList.forEach((list: boolean[]) => {
    const listSet = new Set<string>();
    for (let i: number = 0; i < relation.length; i++) {
      listSet.add(
        list.reduce((sumValue: string, check: boolean, index: number) => {
          if (check) sumValue += relation[i][index];
          return sumValue;
        }, '')
      );
    }
    if (listSet.size === relation.length) {
      candidateKey.push(
        list.reduce((unit: number[], check: boolean, index: number): number[] => {
          if (check) unit.push(index);
          return unit;
        }, [])
      );
    }
  });
  while (true) {
    let check: boolean = true;
    for (let i: number = 0; i < candidateKey.length; i++) {
      for (let j: number = 0; j < candidateKey.length; j++) {
        if (candidateKey[i].length < candidateKey[j].length) {
          const length: number = candidateKey[j].length;
          const checkSet = new Set<number>();
          candidateKey[i].forEach((value: number) => checkSet.add(value));
          candidateKey[j].forEach((value: number) => checkSet.add(value));
          if (checkSet.size === length) {
            candidateKey.splice(j, 1);
            check = false;
          }
        }
      }
    }
    if (check) return candidateKey.length;
  }
}

function getIndex(length: number): boolean[][] {
  const outputIndex: boolean[][] = [];
  const picked: number[] = [];

  function find() {
    if (picked.length === length) {
      return outputIndex.push(picked.map((value: number): boolean => (value === 1 ? true : false)));
    }
    for (let i: number = 0; i < 2; i++) {
      picked.push(i);
      find();
      picked.pop();
    }
  }
  find();
  return outputIndex;
}

console.log(
  solution([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ])
);
