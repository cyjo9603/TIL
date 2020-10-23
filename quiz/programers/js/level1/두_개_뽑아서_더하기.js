function solution(numbers) {
  const sums = new Set();
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sums.add(numbers[i] + numbers[j]);
    }
  }

  return [...sums].sort((a, b) => a - b);
}
