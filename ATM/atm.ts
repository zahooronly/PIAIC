import inquirer, { QuestionCollection } from "inquirer";

const userRegisteration:QuestionCollection = [
    {
      type: 'input',
      name: 'userID',
      message: 'Enter your Account Number:',
    },
    {
      type: 'input',
      name: 'pin',
      message: 'Enter your PIN:',
    },
    {
      type: 'input',
      name: 'balance',
      message: 'Enter your Balance:',
    },
    {
      type: 'list',
      name: 'getStarted',
      message: 'Select an operation:',
      choices: ['Proceed...', 'Go Back'],
    },
    ];
let users:{}=[
    {
    userID:0,
    pin:0,
    balance:0,
    getStarted:""
}
];
