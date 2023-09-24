// Map=> returns same length array
// FILTER => returns same length or less (because it is filtered with condition)
// FOREACH => returns nothing


// MAP METHOD:
let numbers:number[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let numArray:string[]=numbers.map((num)=>{
    if(num%2===0){
        return `${num} is Even`
    }
    return `${num} is Odd`
})
console.log("Original Array",numbers)
console.log("Updated Array with Map",numArray)
