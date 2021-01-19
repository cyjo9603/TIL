function permute(nums) {
  return nums.reduce(
    (list, v) => {
      return extendPermutation(list, v);
    },
    [[]]
  );

  function extendPermutation(list, extender) {
    return list.reduce((arr, seq) => {
      for (let i = seq.length; i >= 0; i--) {
        const newSeq = [...seq];
        newSeq.splice(i, 0, extender);
        arr.push(newSeq);
      }
      return arr;
    }, []);
  }
}

const permuteUnique = (nums) => {
  const uniqueNumStrs = [...new Set(permute(nums).map((arr) => arr.toString()))];
  return uniqueNumStrs.map((arr) => arr.split(',').map((v) => Number(v)));
};

console.log(permuteUnique([1, 2, 3]));
