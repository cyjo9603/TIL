/**
 * @param {number[]} A
 */
function solution(A) {
  const setA = new Set(A);

  if (setA.size !== A.length) return 0;

  const sum = {
    A: 0,
    index: 0,
  };

  const [sumA, sumIndex] = [...setA].reduce(
    (acc, num, i) => {
      acc[0] += num;
      acc[1] += i + 1;
      return acc;
    },
    [0, 0]
  );

  if (sumA !== sumIndex) return 0;

  return 1;
}
