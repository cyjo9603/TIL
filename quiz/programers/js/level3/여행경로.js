function solution(tickets) {
  const pathList = [];

  const dfs = (current, city, path) => {
    current.length === 0 && pathList.push(path);

    current.forEach((v, i) => {
      if (v[0] === city) {
        const [reaminPath, currentPath] = [[...current], [...path]];
        reaminPath.splice(i, 1);
        currentPath.push(v[1]);
        dfs(reaminPath, v[1], currentPath);
      }
    });
  };
  dfs(tickets, 'ICN', ['ICN']);

  return pathList.sort()[0];
}

console.log(
  solution([
    ['ICN', 'COO'],
    ['ICN', 'BOO'],
    ['COO', 'ICN'],
    ['BOO', 'DOO'],
  ])
);
