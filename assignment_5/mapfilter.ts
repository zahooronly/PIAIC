 let nnumberss:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaresOfEvenNumbers = nnumberss
    .filter(num => num % 2 === 0)
    .map(num => num * num);
console.log(squaresOfEvenNumbers);
