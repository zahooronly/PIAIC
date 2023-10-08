"use strict";
class Student {
    constructor(_name, _age, _agNumber, _degree, _program, _semester, _isCR, _gender, _isGR) {
        this.name = _name;
        this.age = _age;
        this.agNumber = _agNumber;
        this.degree = _degree;
        this.program = _program;
        this.semester = _semester;
        this.gender = _gender;
    }
}
class FemaleStudent extends Student {
    constructor(_isGR) {
        super("", 18, _isGR ? "GR" : "AG", "BSc", "Computer Science", 1, false, false, _isGR);
        this.isGR = _isGR;
    }
}
class MaleStudent extends Student {
    constructor(_isCR) {
        super("", 18, _isCR ? "CR" : "AG", "BSc", "Computer Science", 1, _isCR, false, false);
        this.isCR = _isCR;
    }
}
class Course {
    constructor(_name, _code, _credit) {
        this.name = _name;
        this.code = _code;
        this.credit = _credit;
    }
}
class CourseOffering {
    constructor(_course, _semester, _year) {
        this.course = _course;
        this.semester = _semester;
        this.year = _year;
    }
}
class Section {
    constructor(_courseOffering, _sectionNumber) {
        this.courseOffering = _courseOffering;
        this.sectionNumber = _sectionNumber;
    }
}
class StudentSection {
    constructor(_student, _section, _grade) {
        this.student = _student;
        this.section = _section;
        this.grade = _grade;
    }
}
let students = new Student("Sara", 18, "AG", "BSc", "Computer Science", 1, false, false, false);
console.log(students);
