
// 20 Aug
let a:number=1

a++
let b:number=1+ ++a

// console.log("a: ",a);
// console.log("b: ",b);


// while (a<10) {
//     // console.log(a)
// }



// create sum of even between 1 to 100
console.log("me");
let evenNumbers:number[]=[]
var sum:number=0
for (let i:number = 1; i <=100; i++) {
    if (i%2==0) {sum=sum+i;evenNumbers.push(i)}
}
console.log(sum,evenNumbers)