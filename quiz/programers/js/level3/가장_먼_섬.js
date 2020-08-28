function solution(n, edge) {
  const queue = [1];
  const visit = [1];
  const distance = [0];
  let count = 1;

  while (visit.length < n) {
    const deleteNode = queue.shift();
    const deleteNodeIndex = visit.findIndex((v) => v === deleteNode);

    for (let i = edge.length - 1; i >= 0; i--) {
      if (edge[i].includes(deleteNode)) {
        const next = edge[i][0] === deleteNode ? edge[i][1] : edge[i][0];
        if (!visit.includes(next)) {
          visit.push(next);
          queue.push(next);
          distance.push(distance[deleteNodeIndex] + 1);
        }

        edge.splice(i, 1);
      }
    }
  }
  const last = distance.pop();
  for (let i = distance.length - 1; i >= 0; i--) {
    if (last === distance.pop()) {
      count++;
    } else {
      break;
    }
  }
  return count;
}
