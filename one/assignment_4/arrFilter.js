"use strict";
let negArr = [-1, 2, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, -4, 5, -6, 7, -8, 9, -10];
console.log("Original Array: ", negArr);
let j = 0;
while (j < negArr.length) {
    if (negArr[j] % 2 == 0) {
        negArr.splice(j, 1);
    }
    else {
        j++;
    }
}
console.log("Filtered Array: ", negArr);
