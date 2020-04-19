function solution(s) {
  s = s.toLowerCase();
  const numberOfP = s.split('p').length;
  const numberOfy = s.split('y').length;
  if (numberOfP === numberOfy) {
    return true;
  }
  return false;
}

console.log(solution('PPoooyY'));
