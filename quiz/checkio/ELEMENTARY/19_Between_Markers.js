function betweenMarkers(stringA, initialMarkers, finalMarkers) {
  const stringArray = Array.from(stringA);
  const markersIndex = [];
  let outputString;
  let mode = 0;
  if (initialMarkers.search('\\[') !== -1) {
    initialMarkers = '\\' + initialMarkers;
    mode = 1;
  }
  if (finalMarkers.search('\\[') !== -1) {
    console.log(finalMarkers.search('\\['));
    finalMarkers = '\\' + finalMarkers;
  }
  if (stringA.search(initialMarkers) !== -1) {
    markersIndex.push([stringA.search(initialMarkers), 'initail']);
  }
  if (stringA.search(finalMarkers) !== -1) {
    markersIndex.push([stringA.search(finalMarkers), 'final']);
  }
  if (markersIndex.length === 2) {
    outputString = stringArray.slice(markersIndex[0][0] + initialMarkers.length - mode, markersIndex[1][0]);
  } else if (markersIndex.length === 1 && markersIndex[0][1] === 'initail') {
    outputString = stringArray.slice(markersIndex[0][0] + initialMarkers.length - mode, stringArray.length);
  } else if (markersIndex.length === 1 && markersIndex[0][1] === 'final') {
    outputString = stringArray.slice(0, markersIndex[0][0]);
  } else if (markersIndex.length === 0) {
    return stringA;
  }
  console.log(finalMarkers);
  return outputString.join('');
}

console.log(betweenMarkers('No [b]hi', '[b]', '[/b]'));
