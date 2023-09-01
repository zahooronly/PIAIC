const unitsConsumed: number = 250; 

let taxPercentage: number;

if (unitsConsumed > 500) {
  taxPercentage = 0.25; 
} else if (unitsConsumed > 200) {
  taxPercentage = 0.15; 
} else if (unitsConsumed > 100) {
  taxPercentage = 0.10; 
} else {
  taxPercentage = 0; 
}

const billAmount: number = unitsConsumed * 10; 
const taxAmount: number = billAmount * taxPercentage;
const totalAmount: number = billAmount + taxAmount;

console.log(`Total Bill Amount: $${totalAmount.toFixed(2)}`);
