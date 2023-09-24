"use strict";
let todos = ["Class", "Lunch"];
function addTodo(newTodo) {
    return todos.push(newTodo);
}
function removeTodo(index) {
    return todos.splice(index, 1);
}
function removeTodo2(index, hoMany) {
    return todos.splice(index, hoMany);
}
function updateTodo(index, updatedTodo) {
    return todos.splice(index, 1, updatedTodo);
}
addTodo("Dinner");
addTodo("Study");
addTodo("Maths Assignment");
addTodo("Class Arrange");
addTodo("Sir Nayyar Class Cancel");
addTodo("Coding krni hy");
addTodo("complete all todos");
console.log("Todos before removing from mid \n", todos);
function task2() {
    if ((todos.length) % 2 == 0) {
        const mid = todos.length / 2;
        removeTodo2(mid, 2);
    }
    else {
        removeTodo(todos.length / 2);
    }
}
task2();
console.log("Todos after removing from mid \n", todos);
console.log(todos.length);
