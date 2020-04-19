function solution(arr) {
  let numberAddr = 0;
  arr.reduce((addr, number, index) => {
    if (addr > number) {
      addr = number;
      numberAddr = index;
    }
    return addr;
  }, arr[0]);
  arr.splice(numberAddr, 1);
  if (arr.length === 0) {
    return [-1];
  }
  return arr;
}

console.log(solution([10]));
