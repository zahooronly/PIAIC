"use strict";
const numberToCheck = 15;
if (numberToCheck % 3 === 0 && numberToCheck % 5 === 0) {
    console.log("Divisible by both 3 and 5");
}
else if (numberToCheck % 3 === 0) {
    console.log("Divisible by 3");
}
else if (numberToCheck % 5 === 0) {
    console.log("Divisible by 5");
}
else {
    console.log("Not divisible by 3 or 5");
}
