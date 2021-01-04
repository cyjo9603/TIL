function solution(A) {
  return [
    ...A.reduce((numberSet, number) => {
      if (numberSet.has(number)) {
        numberSet.delete(number);
      } else {
        numberSet.add(number);
      }

      return numberSet;
    }, new Set()).values(),
  ][0];
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
