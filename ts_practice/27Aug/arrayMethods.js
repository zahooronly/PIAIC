"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let numArray = numbers.map((num) => {
    if (num % 2 === 0) {
        return `${num} is Even`;
    }
    return `${num} is Odd`;
});
console.log("Original Array", numbers);
console.log("Updated Array with Map", numArray);
