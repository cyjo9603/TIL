function solution(heights) {
  const receiveTower = [];
  const reverseHeights = heights.reverse();
  for (let i = 0; i < reverseHeights.length - 1; i++) {
    for (let j = i + 1; j < reverseHeights.length; j++) {
      if (reverseHeights[i] < reverseHeights[j]) {
        receiveTower.push(reverseHeights.length - j);
        break;
      }
      if (j === reverseHeights.length - 1) {
        receiveTower.push(0);
      }
    }
  }
  return fitDigits(receiveTower.reverse(), heights.length);
}

function fitDigits(inputArray, digits) {
  while (inputArray.length !== digits) {
    inputArray.unshift(0);
  }
  return inputArray;
}

console.log(solution([1, 5, 3, 6, 7, 6, 5]));
