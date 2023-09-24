"use strict";
const unitsConsumed = 250;
let taxPercentage;
if (unitsConsumed > 500) {
    taxPercentage = 0.25;
}
else if (unitsConsumed > 200) {
    taxPercentage = 0.15;
}
else if (unitsConsumed > 100) {
    taxPercentage = 0.10;
}
else {
    taxPercentage = 0;
}
const billAmount = unitsConsumed * 10;
const taxAmount = billAmount * taxPercentage;
const totalAmount = billAmount + taxAmount;
console.log(`Total Bill Amount: $${totalAmount.toFixed(2)}`);
