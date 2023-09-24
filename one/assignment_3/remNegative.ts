let arrOfNums:number[] = [1, -2, 3, -4, 5, -6, 7];

let index:number = 0;
while (index < arrOfNums.length) {
  if (arrOfNums[index] < 0) {
    arrOfNums.splice(index, 1);
  } else {
    index++;
  }
}

console.log(numbers);
