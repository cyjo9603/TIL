const combination = (inputArr, select) => {
  const list = [];

  const doCombination = (target, n, r, count) => {
    if (r === 0 || n === 0 || n < r) {
      return r === 0 && list.push(target);
    }
    target.push(inputArr[count]);
    doCombination([...target], n - 1, r - 1, count + 1);
    target.pop();
    doCombination([...target], n - 1, r, count + 1);
  };

  doCombination([], inputArr.length, select, 0);
  return list;
};

console.log(combination(['a', 'b', 'c', 'd', 'e', 'f'], 3));
