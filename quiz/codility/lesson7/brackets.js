function solution(S) {
  const checkStack = [];

  for (const s of S) {
    const checkResult = checkBracket(s);

    if (!checkResult) {
      continue;
    }

    if (checkResult === 1) {
      checkStack.push(s);
      continue;
    }

    const poped = checkStack.pop();

    if (!isBracketPop(s, poped)) return 0;
  }

  return checkStack.length === 0 ? 1 : 0;
}

function checkBracket(s) {
  switch (s) {
    case '(':
    case '{':
    case '[':
      return 1;
    case ')':
    case '}':
    case ']':
      return -1;
    default:
      return 0;
  }
}

function isBracketPop(s, poped) {
  switch (s) {
    case ')':
      return poped === '(';
    case '}':
      return poped === '{';
    case ']':
      return poped === '[';
    default:
      return false;
  }
}

console.log(solution('([)()]'));
