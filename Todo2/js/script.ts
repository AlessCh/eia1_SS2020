//aufb10 inspiriert von https://fionavi.github.io/EIA-SOSE20/Aufgabe%2010/Aufgabe10.html //
//und sprachbefehl: https://janzonca.github.io/EIA1-SoSe20/Aufgabe10/todo-app.html//

interface DisplaytoDo {
    text: string;
    checked: boolean;
}

var toDoList: DisplaytoDo[] = [

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


var inputDOMElement: HTMLInputElement;

var addButtonDOMElement: HTMLElement;

var todosDOMElement: HTMLElement;

var counterDOMElement: HTMLElement;


window.addEventListener("load", function(): void {

    inputDOMElement = document.querySelector("#inputTodo");

    addButtonDOMElement = document.querySelector("#addButton");

    todosDOMElement = document.querySelector("#todos");

    counterDOMElement = document.querySelector("#counter");

    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();

});



function drawListToDOM(): void {

    todosDOMElement.innerHTML = "";


    for (let index: number = 0; index < toDoList.length; index++) {

        let todo: HTMLElement = document.createElement("div");

        todo.classList.add("todo");


        todo.innerHTML =  "<span class='check " + toDoList[index].checked + "'><i class='fas fa-check'></i></span>"

                            + toDoList[index].text +

                            "<span class='trash fas fa-trash-alt'></span>";


        todo.querySelector(".check").addEventListener("click", function(): void {

            toggleCheckState(index);

        });

        todo.querySelector(".trash").addEventListener("click", function(): void {

            deleteTodo(index);

        });

        todosDOMElement.appendChild(todo);

    }



    updateCounter();

}



function updateCounter(): void {

    var unchecked: number = 0;
    var checked: number = 0;

    for (let index = 0; index < toDoList.length; index++) {

        if (toDoList[index].checked == true) {
            checked++;
        }
        else {
            unchecked++;
        }


        counterDOMElement.innerHTML =  "total:" + toDoList.length +  ", open:" + unchecked +   ", done:" + checked;

    }
}


function addTodo(): void {


    if (inputDOMElement.value != "") {

        toDoList.unshift(
            { text: inputDOMElement.value,
            checked: false
            }
        );

        inputDOMElement.value = "";

        drawListToDOM();

    }

}


function toggleCheckState(index: number): void {

    toDoList[index].checked = !toDoList[index].checked;

    drawListToDOM();

}

function deleteTodo(index: number): void {

    toDoList.splice(index, 1);

    drawListToDOM();

}

//Spracheingabe:
declare var Artyom: any;

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    
    artyom.addCommands ({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            todoObjects.unshift({
                todosText: (wildcard), 
                todosChecked: false });
            }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();
    

});
