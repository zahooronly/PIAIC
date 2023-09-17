"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = require("inquirer");
const questions = [
    {
        name: "name",
        type: "string",
        message: "What is your name?"
    }
];
const input = inquirer_1.default.prompt(questions);
input
    .then((answers) => {
    console.log(answers.name);
    console.log(input);
})
    .catch((err) => {
    console.log(err);
});
