function solution(operations: string[]): number[] {
  const que = operations.reduce((que: number[], cmd: string): number[] => {
    if (cmd[0] === 'I') que.push(Number(cmd.split(' ')[1]));
    else if (cmd === 'D 1') que.splice(que.indexOf(Math.max(...que)), 1);
    else if (cmd === 'D -1') que.splice(que.indexOf(Math.min(...que)), 1);
    return que;
  }, []);
  if (que.length === 0) return [0, 0];
  return [Math.max(...que), Math.min(...que)];
}

console.log(solution(['I 7', 'I 5', 'I -5', 'D -1']));
