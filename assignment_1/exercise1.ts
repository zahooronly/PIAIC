// Exercise 1:  Write a program that calculates the area of a rectangle.
let lengthh: number = 5; 
let width: number = 3; 

let area: number = lengthh * width;
console.log("\nOutput of Exercise 1:");
console.log(`The area of the rectangle is ${area}`);


// Exercise 2: Write a program that takes input and calculates the volume of a cube.
let sideLength: number = 4; 

let volume: number = sideLength ** 3;
console.log("\nOutput of Exercise 2:");

console.log(`The volume of the cube is ${volume}`);


// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
let inputNumber: number = 7; 

console.log("\nOutput of Exercise 3:");
if (inputNumber > 0) {
    console.log("The number is Positive");
} else if (inputNumber < 0) {
    console.log("The number is Negative");
} else {
  console.log("The number is Zero");
}


// Exercise 4:   Write a program that checks if a given number is even or odd.

console.log("The number is Even");
if (inputNumber % 2 === 0) {
    console.log("\nOutput of Exercise 4:");
    
} else {
    console.log("\nOutput of Exercise 4:");
}

// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
let personAge: number = 20;

console.log("\nOutput of Exercise 5:");
if (personAge >= 18) {
    
  console.log("The person is Eligible to vote");
} else {
  console.log("The person is Not eligible to vote");
}

// Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)

let result: number = ((10 + 5) * 3 - 2) / (4 % 3) - 7;
console.log("\nOutput of Exercise 6:");

console.log(`The result of the expression is ${result}`);
