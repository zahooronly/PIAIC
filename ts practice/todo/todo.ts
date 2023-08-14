// todo app
let todos: string[] = ["Class", "Lunch"]

function addTodo(newTodo: string) {
    return todos.push(newTodo)
}
function removeTodo(index: number) {
    return todos.splice(index, 1)
}
function removeTodo2(index: number, hoMany: number) {
    return todos.splice(index, hoMany)
}
function updateTodo(index: number, updatedTodo: string) {
    return todos.splice(index, 1, updatedTodo)
}

addTodo("Dinner")
addTodo("Study")
addTodo("Maths Assignment")
addTodo("Class Arrange")
addTodo("Sir Nayyar Class Cancel")
addTodo("Coding krni hy")
addTodo("complete all todos")
// console.log(todos)
// removeTodo(1)
console.log("Todos before removing from mid \n", todos)
// updateTodo(1, "rat ki roti")
// console.log(todos)
function task2() {
    if ((todos.length) % 2 == 0) {
        const mid: number = todos.length / 2;
        // removeTodo(mid)
        // removeTodo(mid + 1)
        removeTodo2(mid, 2)
    } else {
        removeTodo(todos.length / 2)
    }
}
task2()
console.log("Todos after removing from mid \n", todos)
console.log(todos.length)