const userChoice: number = 3;

let dayOfWeek: string;
if (userChoice === 1) {
  dayOfWeek = "Sunday";
} else if (userChoice === 2) {
  dayOfWeek = "Monday";
} else if (userChoice === 3) {
  dayOfWeek = "Tuesday";
} else if (userChoice === 4) {
  dayOfWeek = "Wednesday";
} else if (userChoice === 5) {
  dayOfWeek = "Thursday";
} else if (userChoice === 6) {
  dayOfWeek = "Friday";
} else if (userChoice === 7) {
  dayOfWeek = "Saturday";
} else {
  dayOfWeek = "Invalid choice";
}

console.log(`Day of the week: ${dayOfWeek}`);
