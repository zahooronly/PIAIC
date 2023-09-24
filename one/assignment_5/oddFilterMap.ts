const nums = [3, 6, 9, 12, 15, 18];
const doubleOdds = nums
    .filter(num => num % 2 !== 0)
    .map(num => num * 2);
console.log(doubleOdds);
