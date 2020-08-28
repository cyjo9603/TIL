const DAY_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const DAY_PER_MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function solution(a, b) {
  let totalDay = b + 4;
  for (let i = 0; i < a - 1; i++) {
    totalDay += DAY_PER_MONTH[i];
  }
  totalDay %= 7;
  return DAY_OF_WEEK[totalDay];
}

console.log(solution(5, 24));
