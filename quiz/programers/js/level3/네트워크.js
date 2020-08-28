function solution(n, computers) {
  const network = computers.map((list) => list.map((v, i) => v === 1 && i + 1).filter((v) => v));
  for (let i = network.length - 1; i > 0; i--) {
    let check = false;
    for (let j = i - 1; j >= 0; j--) {
      for (let k = 0; k < network[i].length; k++) {
        if (network[j].includes(network[i][k])) {
          network[j] = [...network[j], ...network[i]];
          network.splice(i, 1);
          check = true;
          break;
        }
      }
      if (check) {
        break;
      }
    }
  }
  return network.length;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
