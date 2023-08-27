"use strict";
// console.log("Hello")
let negArr = [-1, 2, 3, -4, 5, -6, 7, -8, 9, -10];
console.log("Original Array: ", negArr);
// let negArrFilter = negArr.filter((num)=>num>=0);
let index = 0;
while (index < negArr.length) {
    if (negArr[index] < 0) {
        negArr.splice(index, 1);
    }
    else {
        index++;
    }
}
while (index < negArr.length) {
    if (negArr[index] % 2 == 0) {
        negArr.splice(index, 1);
    }
    else {
        index++;
    }
}
// console.log("Filtered Array: ",negArrFilter);
console.log("Filtered Array: ", negArr);
// console.log(negArrFilter)
