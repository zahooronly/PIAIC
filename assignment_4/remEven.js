"use strict";
const NewNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < NewNumbers.length; i++) {
    if (NewNumbers[i] % 2 === 0) {
        NewNumbers.splice(i, 1);
        i--;
    }
}
console.log(numbers);
