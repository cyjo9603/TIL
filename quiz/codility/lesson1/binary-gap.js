function solution(N) {
  const binary = N.toString(2);

  const binaryGap = deleteSideZeroNumber(binary).match(/[0]+/g);

  if (!binaryGap) return 0;

  return binaryGap.sort((a, b) => b.length - a.length)[0].length;
}

function deleteSideZeroNumber(binary) {
  const frontOneIndex = [...binary].findIndex((n) => n === '1');
  const backOneIndex = binary.length - [...binary].reverse().findIndex((n) => n === '1');

  return binary.slice(frontOneIndex, backOneIndex);
}

console.log(solution(328));
