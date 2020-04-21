function solution(budgets, M) {
  if (budgets.reduce((sum, v) => sum + v, 0) <= M) return Math.max(...budgets);
  let [max, min, mid, beforeMid] = [Math.max(...budgets), ~~(M / budgets.length), 0, 0];

  while (true) {
    [mid, beforeMid] = [~~((max + min) / 2), mid];
    if (mid === beforeMid) return mid;
    budgets.reduce((s, v) => s + (v < mid ? v : mid), 0) > M ? (max = mid) : (min = mid);
  }
}
