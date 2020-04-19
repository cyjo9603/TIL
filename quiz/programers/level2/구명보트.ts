function solution(people: number[], limit: number): number {
  let count: number = people.length;
  people.sort((a: number, b: number): number => a - b);
  for (let i: number = people.length - 1, searchIndex: number = 0; i > searchIndex; i--) {
    if (people[i] + people[searchIndex] <= limit) {
      searchIndex += 1;
      count--;
    }
  }
  return count;
}
console.log(solution([70, 50, 80, 50], 100));
