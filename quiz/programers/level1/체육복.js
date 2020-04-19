function solution(n, lost, reserve) {
  let countStudent = n - lost.length;
  lost.forEach((lostNumber, index) => {
    for (let i = 0; i < reserve.length; i++) {
      if (lostNumber === reserve[i]) {
        reserve.splice(i, 1);
        lost.splice(index, 1);
        countStudent++;
        break;
      }
    }
  });
  lost.forEach(lostNumber => {
    for (let i = 0; i < reserve.length; i++) {
      if (reserve[i] - 1 <= lostNumber && reserve[i] + 1 >= lostNumber) {
        reserve.splice(i, 1);
        countStudent++;
        break;
      }
    }
  });
  return countStudent;
}

console.log(solution(5, [1, 2], [2, 3]));
