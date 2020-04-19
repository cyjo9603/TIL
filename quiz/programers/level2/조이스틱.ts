function solution(inputName: string): number {
  const inputNameArray: string[] = Array.from(inputName);
  let currentAddr: number = 0;
  let count: number = 0;
  let direction: number = 1;

  while (true) {
    direction = getDirection(inputNameArray, currentAddr, direction);
    const alphabetMoveValue: number = setAlphabet(inputNameArray[currentAddr]);
    if (alphabetMoveValue !== -1) {
      count += alphabetMoveValue;
      inputNameArray[currentAddr] = 'A';
    }
    console.log(`dir: ${direction}, cur: ${currentAddr}`);

    if (isClear(inputNameArray)) {
      break;
    }

    if (currentAddr + direction === -1 && direction === -1) {
      currentAddr = inputNameArray.length - 1;
    } else {
      currentAddr += direction;
    }
    count++;
  }
  return count;
}

function getDirection(inputNameArray: string[], currentAddr: number, direction: number): number {
  let rightCount: number = 0;
  let leftCount: number = 0;

  for (let i: number = currentAddr + 1; rightCount < inputNameArray.length; i++, rightCount++) {
    if (inputNameArray[i] !== 'A') {
      break;
    }
  }

  for (let i: number = currentAddr - 1; leftCount < inputNameArray.length; i--, leftCount++) {
    if (i === -1) {
      i = inputNameArray.length - 1;
    }
    if (inputNameArray[i] !== 'A') {
      break;
    }
  }
  console.log(`left: ${leftCount}, right: ${rightCount}`);
  if (rightCount < leftCount) {
    return 1;
  } else if (rightCount > leftCount) {
    return -1;
  }
  return direction;
}

function setAlphabet(targetChar: string): number {
  const transAsciiChar: number = targetChar.charCodeAt(0);
  if (
    transAsciiChar === 65 ||
    transAsciiChar === 78 ||
    (transAsciiChar > 65 && transAsciiChar < 78)
  ) {
    return transAsciiChar - 65;
  } else if (transAsciiChar > 78 && transAsciiChar <= 90) {
    return 91 - transAsciiChar;
  }
  return -1;
}

function isClear(inputArray: string[]): boolean {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== 'A') {
      return false;
    }
  }
  return true;
}

console.log(solution('AAAZAAAA'));
//console.log(setAlphabet('AAAZAAZA'));
