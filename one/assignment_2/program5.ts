const productPrice: number = 120;

let discount: number;
if (productPrice > 100) {
  discount = 0.1;
} else {
  discount = 0.05;
}

const discountedPrice: number = productPrice - (productPrice * discount);
console.log(`Discounted Price: $${discountedPrice}`);
