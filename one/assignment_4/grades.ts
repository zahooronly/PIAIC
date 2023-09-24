const grades = [65, 78, 32, 90, 45, 75, 22, 88, 95, 40];

for (let i = 0; i < grades.length; i++) {
  if (grades[i] < 50) {
    grades.splice(i, 1);
    i--;
  }
}

console.log(grades);
