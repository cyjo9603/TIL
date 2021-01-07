function solution(H) {
  const stack = [];
  let count = 0;

  H.forEach((h) => {
    while (stack.length !== 0 && stack[stack.length - 1] > h) {
      stack.pop();
    }
    if (stack.length === 0 || stack[stack.length - 1] < h) {
      stack.push(h);
      count++;
    }
  });

  return count++;
}
