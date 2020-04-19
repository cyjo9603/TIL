function solution(strings, n) {
  for (let i = strings.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (Array.from(strings[j])[n] > Array.from(strings[j + 1])[n]) {
        console.log(strings[j], strings[j + 1]);
        [strings[j], strings[j + 1]] = [strings[j + 1], strings[j]];
      } else if (
        Array.from(strings[j])[n] === Array.from(strings[j + 1])[n] &&
        strings[j] > strings[j + 1]
      ) {
        [strings[j], strings[j + 1]] = [strings[j + 1], strings[j]];
      }
    }
  }
  return strings;
}

console.log(solution(['sun', 'bed', 'car'], 1));
