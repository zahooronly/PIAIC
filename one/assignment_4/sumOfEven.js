"use strict";
function sumOfFirstNEvenNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 2 * i;
    }
    return sum;
}
const n = 5;
const resul = sumOfFirstNEvenNumbers(n);
console.log(`Sum of the first ${n} even numbers is ${resul}`);
