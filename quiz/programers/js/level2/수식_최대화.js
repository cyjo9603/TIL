function solution(expression) {
  const operator = expression.match(/\D/g);
  const operatorSequence = permutation([...new Set([...operator])]);
  const sumList = operatorSequence.reduce((exp, list) => {
    const expArr = expression.split(/(\D)/);
    list.forEach((v) => {
      while (true) {
        const index = expArr.findIndex((e) => e === v);
        if (index === -1) {
          break;
        }
        const value = new Function('return' + ` ${expArr[index - 1]}${expArr[index]}${expArr[index + 1]}`)();
        expArr.splice(index - 1, 3, value);
      }
    });
    exp.push(Math.abs(expArr[0]));

    return exp;
  }, []);
  return Math.max(...sumList);
}

function permutation(inputArr) {
  return inputArr.reduce(
    (list, v) => {
      const arr = [];

      list.forEach((seq) => {
        for (let i = seq.length; i >= 0; i--) {
          const newSeq = [...seq];
          newSeq.splice(i, 0, v);
          arr.push(newSeq);
        }
      });

      return arr;
    },
    [[]]
  );
}
