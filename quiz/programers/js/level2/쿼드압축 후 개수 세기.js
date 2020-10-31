function solution(arr) {
  const result = [0, 0];

  if (isEqualAllItem(arr, arr[0][0])) {
    result[arr[0][0]]++;
    return result;
  }

  function splitQuad(base) {
    const length = base.length;
    if (length === 1) {
      result[base[0]]++;
      return;
    }
    const quad = [[], [], [], []];

    for (let i = 0; i < length / 2; i++) {
      quad[0].push(base[i].slice(0, length / 2));
      quad[1].push(base[i].slice(length / 2));
    }
    for (let i = length / 2; i < length; i++) {
      quad[2].push(base[i].slice(0, length / 2));
      quad[3].push(base[i].slice(length / 2));
    }

    quad.forEach((quadArr) => {
      const firstNumber = quadArr[0][0];
      const isEqual = isEqualAllItem(quadArr, firstNumber);

      if (isEqual) {
        result[firstNumber]++;
        return;
      }
      splitQuad(quadArr);
    });
  }
  splitQuad(arr);

  return result;
}

function isEqualAllItem(arr, equalNum) {
  return arr.flat().every((num) => num === equalNum);
}

console.log(
  solution([
    [0, 0],
    [0, 0],
  ])
);
