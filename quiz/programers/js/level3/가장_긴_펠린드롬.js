function solution(s) {
  let max = 0;

  for (let i = 0; i < s.length - 1; i++) {
    for (let j = 1; i - j >= 0 && i + j < s.length; j++) {
      if (s[i - j] !== s[i + j]) {
        const current = (j - 1) * 2 + 1;
        max = max < current ? current : max;
        break;
      }
      const current = j * 2 + 1;
      max = max < current ? current : max;
    }
    for (let j = 1; i - j + 1 >= 0 && i + j < s.length + 1; j++) {
      if (s[i - j + 1] !== s[i + j]) {
        const current = (j - 1) * 2;
        max = max < current ? current : max;
        break;
      }
      const current = j * 2;
      max = max < current ? current : max;
    }
  }
  return max === 0 ? 1 : max;
}
