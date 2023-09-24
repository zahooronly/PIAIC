// setTimeout(() => {
//     console.log("Hello World")
// }, 2000);

class Human{
    name:string="";
    age:number=0;
    
    constructor(_name:string, _age:number){
        this.name=_name;
        this.age=_age;
    }
}
class Student{
    name:string="";
    age:number=0;
    agNumber:string="";
    degree:string="";
    program:string="";
    semester:number=0;
    isCR:boolean=false;
    gender:boolean=true;
    isGR:boolean=false;
    constructor(_name:string,_age:number,_agNumber:string,_degree:string,_program:string,_semester:number,_isCR:boolean,_gender:boolean,_isGR:boolean){
        this.name=_name;
        this.age=_age;
        this.agNumber=_agNumber;
        this.degree=_degree;
        this.program=_program;
        this.semester=_semester;
        this.isCR=_isCR;
        this.gender=_gender;
        this.isGR=_isGR;
    }
}
let Abdullah=new Human("Abdullah", 20);
console.log(Abdullah);

let zahoor=new Student(
    "Zahoor",
    21,
    "2021-AG-7754",
    "BS",
    "Computer Science",
    5,
    true,
    true,
    false
)

console.log(zahoor);


let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello World");
    },2000)

})