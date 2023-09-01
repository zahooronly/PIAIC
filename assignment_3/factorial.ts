function calculateFactorial(n: number): number {
    let result = 1;
    let i = 1;
    while (i <= n) {
      result *= i;
      i++;
    }
    return result;
  }
  const factorialOf5 = calculateFactorial(5);
  console.log(`Factorial of 5 is ${factorialOf5}`);
  