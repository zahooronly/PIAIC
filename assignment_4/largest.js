"use strict";
function findLargestElement(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
const numList = [12, 45, 78, 32, 56, 90, 21];
const largest = findLargestElement(numList);
console.log(`The largest element in the array is ${largest}`);
