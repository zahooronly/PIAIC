"use strict";
const celTemp = [0, 10, 20, 30, 40];
const fahTemp = celTemp.map(celsius => (celsius * 9 / 5) + 32);
console.log(fahTemp);
