"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function calculate() {
    return __awaiter(this, void 0, void 0, function* () {
        const questions = [
            {
                type: 'input',
                name: 'num1',
                message: 'Enter the first number:',
                validate: (value) => !isNaN(Number(value)) || 'Please enter a valid number',
            },
            {
                type: 'input',
                name: 'num2',
                message: 'Enter the second number:',
                validate: (value) => !isNaN(Number(value)) || 'Please enter a valid number',
            },
            {
                type: 'list',
                name: 'operation',
                message: 'Select an operation:',
                choices: ['Addition', 'Subtraction', 'Multiplication', 'Modulus', 'Division', 'Exponent'],
            },
        ];
        const answers = yield inquirer_1.default.prompt(questions);
        const num1 = parseFloat(answers.num1);
        const num2 = parseFloat(answers.num2);
        let result;
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
    });
}
calculate();
