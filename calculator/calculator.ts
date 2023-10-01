import inquirer from 'inquirer';
import logo from './logo.js';

async function calculate() {
  console.log(logo);
  const questions = [
    {
      type: 'input',
      name: 'num1',
      message: 'Enter the first number:',
      validate: (value: string) => !isNaN(Number(value)) || 'Please enter a valid number',
    },
    {
      type: 'input',
      name: 'num2',
      message: 'Enter the second number:',
      validate: (value: string) => !isNaN(Number(value)) || 'Please enter a valid number',
    },
    {
      type: 'list',
      name: 'operation',
      message: 'Select an operation:',
      choices: ['Addition', 'Subtraction', 'Multiplication', 'Modulus', 'Division', 'Exponent'],
    },
  ];

  const answers = await inquirer.prompt(questions);

  const num1 = parseFloat(answers.num1);
  const num2 = parseFloat(answers.num2);
  let result: number;

  switch (answers.operation) {
    case 'Addition':
      result = num1 + num2;
      break;
    case 'Subtraction':
      result = num1 - num2;
      break;
    case 'Multiplication':
      result = num1 * num2;
      break;
    case 'Modulus':
      result = num1 % num2;
      break;
    case 'Division':
      if (num2 === 0) {
        console.log('Error: Division by zero is not allowed');
        return;
      }
      result = num1 / num2;
      break;
    case 'Exponent':
      result = Math.pow(num1, num2);
      break;
    default:
      console.log('Invalid operation');
      return;
  }

  console.log(`Result: ${result}`);
}

calculate();
