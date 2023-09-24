"use strict";
class Human {
    name = "";
    age = 0;
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
}
class Student {
    name = "";
    age = 0;
    agNumber = "";
    degree = "";
    program = "";
    semester = 0;
    isCR = false;
    gender = true;
    isGR = false;
    constructor(_name, _age, _agNumber, _degree, _program, _semester, _isCR, _gender, _isGR) {
        this.name = _name;
        this.age = _age;
        this.agNumber = _agNumber;
        this.degree = _degree;
        this.program = _program;
        this.semester = _semester;
        this.isCR = _isCR;
        this.gender = _gender;
        this.isGR = _isGR;
    }
}
let Abdullah = new Human("Abdullah", 20);
console.log(Abdullah);
let zahoor = new Student("Zahoor", 21, "2021-AG-7754", "BS", "Computer Science", 5, true, true, false);
console.log(zahoor);
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 2000);
});
