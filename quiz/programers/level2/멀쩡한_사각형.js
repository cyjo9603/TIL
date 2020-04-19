function solution(w, h) {
  if (w > h) {
    [w, h] = [h, w];
  }
  let count = 0;
  for (let i = 0; i < h; i++) {
    count += Math.ceil((w / h) * (i + 1)) - Math.floor((w / h) * i);
  }
  const answer = w * h - count;
  return answer;
}

console.log(solution(3, 10000000));
