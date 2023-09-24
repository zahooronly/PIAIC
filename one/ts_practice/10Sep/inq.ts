import inquirer from "inquirer";

const questions=[
    {
        name:"name",
        type:"string",
        message:"What is your name?"
    }
]

const input=inquirer.prompt(questions)
input.then((answers)=>{
    console.log(answers.name)
})

.catch((err:Error)=>{
    console.log(err)
})

console.log(input)
