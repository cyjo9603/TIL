const permutation = (inputArr) =>
  inputArr.reduce(
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

console.log(permutation(['a', 'b', 'c']));
