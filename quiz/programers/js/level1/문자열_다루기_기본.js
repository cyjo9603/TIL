const NOTNUMBER_REG = /\D/;

function solution(s) {
  if ((s.length === 4 || s.length === 6) && s.match(NOTNUMBER_REG) === null) {
    return true;
  }
  return false;
}

console.log(solution('1e22'));
