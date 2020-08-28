function solution(s: string) {
  const list: number[] = s.split(' ').map((value: string): number => parseInt(value));
  return `${Math.min(...list)} ${Math.max(...list)}`;
}
console.log(solution('1 2 3 4'));
