function solution(dirs) {
  const path = new Set();
  let current = { x: 0, y: 0 };

  for (let key of dirs) {
    move(key);
  }

  return path.size;

  function move(key) {
    switch (key) {
      case 'U':
        if (current.y < 5) {
          path.add(`x${current.x}:y${current.y},${++current.y}`);
        }
        break;
      case 'D':
        if (current.y > -5) {
          path.add(`x${current.x}:y${--current.y},${current.y + 1}`);
        }
        break;
      case 'R':
        if (current.x < 5) {
          path.add(`x${current.x},${++current.x}:y${current.y}`);
        }
        break;
      case 'L':
        if (current.x > -5) {
          path.add(`x${--current.x},${current.x + 1}:y${current.y}`);
        }
        break;
    }
  }
}

console.log(solution('LULLLLLLU'));
