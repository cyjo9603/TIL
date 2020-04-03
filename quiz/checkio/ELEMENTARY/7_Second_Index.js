function secoundIndex(word, searchWord) {
  let cnt = 0;
  let outputIndex;
  Array.from(word).forEach((element, index) => {
    if (element === searchWord) {
      cnt++;
      if (cnt === 2) {
        outputIndex = index;
      }
    }
  });
  return outputIndex;
}

console.log(secoundIndex('find the river', 'e'));
