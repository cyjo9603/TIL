const charKeyMap = {
  '(': ')',
  '[': ']',
  '{': '}',
};

function isValid(s: string): boolean {
  const stack = [];

  for (const key of s) {
    if (Object.keys(charKeyMap).includes(key)) {
      stack.push(key);
      continue;
    }

    if (charKeyMap[stack.pop()] !== key) {
      return false;
    }
  }

  return !stack.length;
}
