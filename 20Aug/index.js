"use strict";
// 20 Aug
// let a:number=1
// a++
// let b:number=1+ ++a
// console.log("a: ",a);
// console.log("b: ",b);
// while (a<10) {
//     // console.log(a)
// }
// create sum of even between 1 to 100
// console.log("me");
// let evenNumbers:number[]=[]
// var sum:number=0
// for (let i:number = 1; i <=100; i++) {
//     if (i%2==0) {sum=sum+i;evenNumbers.push(i)}
// }
// console.log(sum,evenNumbers)
// recursion
function factorial(x) {
    // let i:number=1
    let result = 1;
    if (x > 0) {
        while (x >= 1) {
            result = x * result;
            x--;
        }
        // console.log(result)
        return result;
    }
    else {
        return console.log("Please enter a positive number");
    }
}
console.log(factorial(4));
factorial(4);
