function solution(s: string): boolean {
  let openCount: number = 0;
  let closeCount: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') openCount++;
    else closeCount++;
    if (closeCount > openCount) return false;
  }
  if (openCount === closeCount) return true;
  else return false;
}
