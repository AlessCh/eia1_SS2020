"use strict";
//inspiriert von https://fionavi.github.io/EIA-SOSE20/Aufgabe%2010/Aufgabe10.html //
var toDoList = [
    {
        text: "coding",
        checked: false
    },
    {
        text: "is",
        checked: false
    },
    {
        text: "hard!",
        checked: true
    }
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    for (let index = 0; index < toDoList.length; index++) {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + toDoList[index].checked + "'><i class='fas fa-check'></i></span>"
            + toDoList[index].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }
    updateCounter();
}
function updateCounter() {
    var unchecked = 0;
    var checked = 0;
    for (let index = 0; index < toDoList.length; index++) {
        if (toDoList[index].checked == true) {
            checked++;
        }
        else {
            unchecked++;
        }
        counterDOMElement.innerHTML = "total:" + toDoList.length + ", open:" + unchecked + ", done:" + checked;
    }
}
function addTodo() {
    if (inputDOMElement.value != "") {
        toDoList.unshift({ text: inputDOMElement.value,
            checked: false
        });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    toDoList[index].checked = !toDoList[index].checked;
    drawListToDOM();
}
function deleteTodo(index) {
    toDoList.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map