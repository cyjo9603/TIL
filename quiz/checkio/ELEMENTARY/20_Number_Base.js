function numberRadix(number, radix) {
  let transNumber = 0;
  Array.from(number)
    .reverse()
    .forEach((element, index) => {
      if (/[a-zA-Z]/.test(element)) {
        element = element.charCodeAt() - 55;
      }
      if (element >= radix) {
        transNumber = -1;
        return;
      }
      if (transNumber !== -1) {
        transNumber += element * Math.pow(radix, index);
      }
    });
  return transNumber;
}

console.log(numberRadix('909', 9));
