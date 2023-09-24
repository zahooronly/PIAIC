"use strict";
function calculateSum(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum;
}
const numbersList = [1, 2, 3, 4, 5];
const sum = calculateSum(numbersList);
console.log(`Sum of numbersList: ${sum}`);
