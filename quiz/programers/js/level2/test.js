"use strict";
function getFactorial(inputNumber) {
    if (inputNumber === 1)
        return 1;
    return inputNumber * getFactorial(inputNumber - 1);
}
function Permutation() { }
