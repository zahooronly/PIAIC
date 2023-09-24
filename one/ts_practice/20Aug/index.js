"use strict";
function factorial(x) {
    let result = 1;
    if (x > 0) {
        while (x >= 1) {
            result = x * result;
            x--;
        }
        return result;
    }
    else {
        return console.log("Please enter a positive number");
    }
}
console.log(factorial(4));
factorial(4);
