function solution(s: string) {
  const list: string[] = [s[0]];
  for (let i: number = 1; i < s.length; i++) {
    if (list[list.length - 1] === s[i] && list.length !== 0) list.pop();
    else list.push(s[i]);
  }
  return list.length === 0 ? 1 : 0;
}

console.log(solution('baabaabaabaa'));
