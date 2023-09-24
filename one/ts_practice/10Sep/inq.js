"use strict";
exports.__esModule = true;
var inquirer_1 = require("inquirer");
var questions = [
    {
        name: "name",
        type: "string",
        message: "What is your name?"
    }
];
var input = inquirer_1["default"].prompt(questions);
input.then(function (answers) {
    console.log(answers.name);
})["catch"](function (err) {
    console.log(err);
});
console.log(input);
