function solution(n) {
  const layers = new Array(n).fill().map((_, i) => new Array(i + 1).fill());
  let [x, y, direction, count] = [0, 0, 0, 0];

  for (let i = 0; i < n; i++) {
    switch (direction) {
      case 0:
        fillLine(i, () => (layers[y++][x] = ++count));
        x++;
        y--;
        break;
      case 1:
        fillLine(i, () => (layers[y][x++] = ++count));
        x -= 2;
        y--;
        break;
      default:
        fillLine(i, () => (layers[y--][x--] = ++count));
        x++;
        y += 2;
        break;
    }
    nextDirection();
  }
  return layers.reduce((acc, layer) => [...acc, ...layer], []);

  function fillLine(index, callback) {
    for (let i = index; i < n; i++) {
      callback();
    }
  }

  function nextDirection() {
    if (direction === 2) {
      direction = 0;
      return;
    }
    direction++;
  }
}

console.log(solution(4));
