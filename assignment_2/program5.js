"use strict";
const productPrice = 120;
let discount;
if (productPrice > 100) {
    discount = 0.1;
}
else {
    discount = 0.05;
}
const discountedPrice = productPrice - (productPrice * discount);
console.log(`Discounted Price: $${discountedPrice}`);
