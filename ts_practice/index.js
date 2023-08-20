"use strict";
// // functions
// function friends(person1: string, person2: string) {
//     let friend = `${person1} and ${person2} are best friends`
//     return friend
// }
// console.log(friends("Ahmad Saboor", "Zahoor Ahmad"))
// // Arrays
// let classStudents: string[] = ["Ahmad Saboor", "Zahoor Ahmad", "Muhammad Talha", "Muhammad Faizan", "Waqar Akram Bhutta",]
// console.log(classStudents)
// 20 Aug
let a = 1;
a++;
let b = 1 + ++a;
// console.log("a: ",a);
// console.log("b: ",b);
// while (a<10) {
//     // console.log(a)
// }
// create sum of even between 1 to 100
console.log("me");
let evenNumbers = [];
var sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
        evenNumbers.push(i);
    }
}
console.log(sum, evenNumbers);
