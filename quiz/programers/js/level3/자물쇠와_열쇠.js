function solution(key, lock) {
  let currentKey = [...key];
  for (let rotateCount = 0; rotateCount < 4; rotateCount++) {
    currentKey = rotate(currentKey);
    for (let top = 0; top <= lock.length * 2; top++) {
      for (let left = 0; left <= lock.length * 2; left++) {
        const extendedLock = extend(lock);
        match(currentKey, extendedLock, top, left);
        if (isKey(extendedLock)) {
          return true;
        }
      }
    }
  }
  return false;
}

function match(key, lock, top, left) {
  key.forEach((col, i) =>
    col.forEach((keyValue, j) => {
      lock[i + top][j + left] += keyValue;
    })
  );
}

function isKey(matchedLock) {
  const len = matchedLock.length / 3;
  for (let i = len; i < len * 2; i++) {
    for (let j = len; j < len * 2; j++) {
      if (matchedLock[i][j] !== 1) {
        return false;
      }
    }
  }
  return true;
}

function rotate(key) {
  return key.map((col, i) => col.map((_, j) => key[key.length - 1 - j][i]));
}

function extend(arr) {
  const extended = new Array(arr.length * 3).fill().map(() => new Array(arr.length * 3).fill(0));

  arr.forEach((col, i) =>
    col.forEach((origin, j) => {
      extended[arr.length + i][arr.length + j] = origin;
    })
  );

  return extended;
}
// function solution(key, lock) {
//   let currentKey = key;
//   for (let rotateCount = 0; rotateCount < 4; rotateCount++) {
//     currentKey = rotate(currentKey);
//     for (let top = 0; top <= key.length * 2; top++) {
//       for (let left = 0; left <= key.length * 2; left++) {
//         const extendedLock = extend(lock);
//         match(currentKey, extendedLock, top, left);
//         if (isKey(extendedLock)) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }

// function match(key, lock, top, left) {
//   key.forEach((col, i) =>
//     col.forEach((keyValue, j) => {
//       lock[i + top][j + left] += keyValue;
//     })
//   );
// }

// function isKey(matchedLock) {
//   const len = matchedLock.length / 3;
//   for (let i = len; i < len * 2; i++) {
//     for (let j = len; j < len * 2; j++) {
//       if (matchedLock[i][j] !== 1) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// function rotate(key) {
//   return key.map((col, i) => col.map((_, j) => key[key.length - 1 - j][i]));
// }

// function extend(arr) {
//   const extended = new Array(arr.length * 3).fill().map(() => new Array(arr.length * 3).fill(0));

//   arr.forEach((col, i) =>
//     col.forEach((origin, j) => {
//       extended[arr.length + i][arr.length + j] = origin;
//     })
//   );

//   return extended;
// }

console.log(
  solution(
    [
      [1, 1],
      [0, 0],
    ],
    [
      [1, 0],
      [1, 0],
    ]
  )
);
