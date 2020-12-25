function solution(s) {
  const result = [0, 0];

  convertBinary(s);

  return result;

  function convertBinary(num) {
    if (num === '1') {
      return;
    }
    const matchs = num.match(/0/g);
    result[0]++;
    result[1] += matchs ? matchs.length : 0;
    const convertedBinary = num.replace(/0/g, '').length.toString(2);

    return convertBinary(convertedBinary);
  }
}

console.log(solution('01110'));
