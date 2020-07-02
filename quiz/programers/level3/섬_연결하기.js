function solution(n, costs) {
  const node = new Array(n).fill(null).map((v, i) => i);
  let cost = 0;
  costs.sort((a, b) => a[2] - b[2]);

  const find = (x) => (x === node[x] ? x : (node[x] = find(node[x])));

  const union = (x, y, i) => {
    x = find(x);
    y = find(y);
    const currentCost = costs[i][2];

    if (x !== y) {
      node[y] = x;
      cost += currentCost;
    }
  };

  for (let i = 0; i < costs.length; i++) {
    union(costs[i][0], costs[i][1], i);
  }
  return cost;
}
