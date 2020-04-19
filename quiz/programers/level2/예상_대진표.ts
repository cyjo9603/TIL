function solution(playerNumber: number, playerA: number, playerB: number): number {
  for (let i: number = 0; ; i++) {
    if (Math.ceil(playerA / 2) === Math.ceil(playerB / 2)) return i + 1;
    [playerA, playerB, playerNumber] = [Math.ceil(playerA / 2), Math.ceil(playerB / 2), playerNumber / 2];
  }
  return 0;
}
