class Student{
    name:string;
    age:number;
    agNumber:string
    degree:string
    program:string
    semester:number;
    gender:boolean;
    constructor(_name:string,_age:number,_agNumber:string,_degree:string,_program:string,_semester:number,_isCR:boolean,_gender:boolean,_isGR:boolean){
        this.name=_name;
        this.age=_age;
        this.agNumber=_agNumber;
        this.degree=_degree;
        this.program=_program;
        this.semester=_semester;
        this.gender=_gender;
    }
}
class FemaleStudent extends Student{
    isGR:boolean;
    constructor(_isGR:boolean){
        super("",18,_isGR?"GR":"AG","BSc","Computer Science",1,false,false,_isGR)
        this.isGR=_isGR;
    }
}
class MaleStudent extends Student{
    isCR:boolean;
    constructor(_isCR:boolean){
        super("",18,_isCR?"CR":"AG","BSc","Computer Science",1,_isCR,false,false)
        this.isCR=_isCR;
    }
}
class Course{
    name:string;
    code:string;
    credit:number;
    constructor(_name:string,_code:string,_credit:number){
        this.name=_name;
        this.code=_code;
        this.credit=_credit;
    }
}
class CourseOffering{
    course:Course;
    semester:number;
    year:number;
    constructor(_course:Course,_semester:number,_year:number){
        this.course=_course;
        this.semester=_semester;
        this.year=_year;
    }
}
class Section{
    courseOffering:CourseOffering;
    sectionNumber:number;
    constructor(_courseOffering:CourseOffering,_sectionNumber:number){
        this.courseOffering=_courseOffering;
        this.sectionNumber=_sectionNumber;
    }
}
class StudentSection{
    student:Student;
    section:Section;
    grade:number;
    constructor(_student:Student,_section:Section,_grade:number){
        this.student=_student;
        this.section=_section;
        this.grade=_grade;
    }
}

let students:Student= new Student(
    "Sara",
    18,
    "AG",
    "BSc",
    "Computer Science",
    1,
    false,
    false,
    false
)
console.log(students);

