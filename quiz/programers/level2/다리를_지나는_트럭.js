function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let nowWeight = 0;
  const bridgeStatus = [];
  const finishTruck = [];
  for (let i = 0; i < bridge_length; i++) {
    bridgeStatus.push(0);
  }
  for (let i = 0; true; ) {
    answer++;
    if (bridgeStatus[bridgeStatus.length - 1] !== 0) {
      finishTruck.push(bridgeStatus[bridgeStatus.length - 1]);
      nowWeight = getWeight(bridgeStatus) - bridgeStatus[bridgeStatus.length - 1];
      if (finishTruck.length === truck_weights.length) {
        break;
      }
    }
    arrayShift(bridgeStatus);
    if (nowWeight + truck_weights[i] <= weight) {
      bridgeStatus[0] = truck_weights[i];
      nowWeight = getWeight(bridgeStatus);
      i++;
    }
  }
  return answer;
}

function getWeight(inputBridgeStatus) {
  return inputBridgeStatus.reduce((totalWeight, unitWeight) => {
    return totalWeight + unitWeight;
  }, 0);
}

function arrayShift(ipnutArray) {
  for (let i = ipnutArray.length - 1; i > 0; i--) {
    ipnutArray[i] = ipnutArray[i - 1];
  }
  ipnutArray[0] = 0;
}

console.log(getWeight([]));
//console.log(solution(2, 10, [7, 4, 5, 6]));
