function biggerPrice(inputIndex, inputPrice) {
  const outputArray = [];
  inputPrice.sort((unit1, unit2) => {
    return unit2.price - unit1.price;
  });

  for (let i = 0; i < inputIndex; i++) {
    outputArray.push(inputPrice[i]);
  }
  return outputArray;
}

console.log(
  biggerPrice(2, [
    { name: 'bread', price: 100 },
    { name: 'wine', price: 138 },
    { name: 'meat', price: 15 },
    { name: 'water', price: 1 },
  ])
);
