function betweenMarkers(stringA, initialMarkers, finalMarkers) {
  const stringArray = Array.from(stringA);
  const markersIndex = [];
  let outputString;
  stringArray.forEach((element, index) => {
    if (element === initialMarkers || element === finalMarkers) {
      markersIndex.push(index);
    }
  });
  outputString = stringArray.slice(markersIndex[0] + 1, markersIndex[1]);
  return outputString.join('');
}

console.log(betweenMarkers('What is >apple<', '>', '<'));
