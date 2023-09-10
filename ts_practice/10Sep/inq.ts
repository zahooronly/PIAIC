import inquirer, { Answers, QuestionCollection } from "inquirer";

const questions:QuestionCollection=[
    {
        name:"name",
        type:"string",
        message:"What is your name?"
    }
]

const input:Promise<Answers>=inquirer.prompt(questions)
input.then((answers:Answers)=>{
    console.log(answers.name)
})
.catch((err:Error)=>{
    console.log(err)
})
console.log(input)
