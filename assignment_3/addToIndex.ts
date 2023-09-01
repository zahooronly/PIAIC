function spliceFunc(arr:number[],index:number,value:number):number[]{
    return arr.splice(index,0,value)
}
let myArray:number[]=[1,2,3,4]
console.log("Array: ",myArray)
spliceFunc(myArray,2,4)
console.log("New Array: ",myArray)