const findMinHeightTrees = (n, edges) => {
  if (n === 1) return [0];
  const graph = edges.reduce((graph, edge) => {
    graph[edge[0]]?.push(edge[1]) || (graph[edge[0]] = [edge[1]]);
    graph[edge[1]]?.push(edge[0]) || (graph[edge[1]] = [edge[0]]);
    return graph;
  }, {});

  while (true) {
    const keys = Object.keys(graph);

    if (keys.length <= 2) {
      return keys.map((key) => Number(key));
    }

    const leefKeys = keys.filter((key) => graph[key].length === 1);

    deleteLeef(leefKeys, keys);
  }

  function deleteLeef(leefKeys, keys) {
    leefKeys.forEach((leefKey) => {
      keys.forEach((key) => {
        const index = graph[key].findIndex((link) => link === Number(leefKey));
        if (index !== -1) graph[key].splice(index, 1);
      });
    });
    leefKeys.forEach((leefKey) => delete graph[leefKey]);
  }
};

console.log(
  findMinHeightTrees(6, [
    [0, 1],
    [0, 2],
    [0, 3],
    [3, 4],
    [4, 5],
  ])
);
