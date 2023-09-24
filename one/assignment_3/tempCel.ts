const celsiusTemperatures:number[] = [0, 10, 20, 30, 40];
const convertedTemperatures = [];

let ind:number = 0;

while (ind < celsiusTemperatures.length) {
  const celsius = celsiusTemperatures[ind];
  const fahrenheit = (celsius * 9/5) + 32;
  convertedTemperatures.push(fahrenheit);
  ind++;
}

console.log(`Converted Temperatures: ${convertedTemperatures}`);
