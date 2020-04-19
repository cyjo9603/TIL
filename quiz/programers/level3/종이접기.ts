function solution(n: number): number[] {
  let output: number[] = [0];
  for (let i: number = 1; i < n; i++) {
    output = output.reduce((next: number[], value: number, index: number): number[] => {
      if (index % 2 === 0) next.push(0, value, 1);
      else next.push(value);
      return next;
    }, []);
  }
  return output;
}

console.log(solution(4));
