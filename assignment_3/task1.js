"use strict";
function spliceFunc(arr, index, value) {
    return arr.splice(index, 0, value);
}
let myArray = [1, 2, 3, 4];
console.log("Array: ", myArray);
spliceFunc(myArray, 2, 4);
console.log("New Array: ", myArray);
