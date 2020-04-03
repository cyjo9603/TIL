function commonWords(string1, string2) {
  const outputArray = [];
  string1 = division(string1);
  string2 = division(string2);
  console.log(string1, string2);

  for (let i in string1) {
    for (let j in string2) {
      if (string1[i] === string2[j]) {
        outputArray.push(string1[i]);
      }
    }
  }
  outputArray.sort();
  return outputArray.join();
}

function division(inputString) {
  let i = 0;
  const divisionArray = [''];

  if (inputString.length === 0) {
    return 0;
  }

  Array.from(inputString).forEach(element => {
    if (element === ',') {
      divisionArray.push('');
      return i++;
    } else {
      divisionArray[i] += element;
    }
  });

  return divisionArray;
}

console.log(commonWords('one,two,three', 'four,five,one,two,six,three'));
