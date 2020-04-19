function solution(arrangement) {
  const ironStickList = [];
  const laserList = [];
  for (let i = 0; i < arrangement.length; i++) {
    if (arrangement.substr(i, 1) === '(' && arrangement.substr(i + 1, 1) === ')') {
      laserList.push(i + 0.5);
    } else if (arrangement.substr(i, 1) === '(') {
      ironStickList.push([i]);
    } else if (arrangement.substr(i, 1) === ')' && arrangement.substr(i - 1, 1) !== '(') {
      const closeCount = getCloseCount(ironStickList);
      ironStickList[closeCount].push(i - ironStickList[closeCount][0]);
    }
  }
  const answer = ironStickList.reduce((count, ironStick) => {
    let blockCount = 0;
    laserList.forEach(laser => {
      if (ironStick[0] < laser && ironStick[0] + ironStick[1] > laser) {
        blockCount++;
      }
    });
    count += blockCount === 0 ? 0 : blockCount + 1;
    return count;
  }, 0);
  return answer;
}

function getCloseCount(inputArray) {
  for (let i = inputArray.length - 1; i >= 0; i--) {
    if (inputArray[i].length === 1) {
      return i;
    }
  }
}

console.log(solution('()(((()())(())()))(())'));
