let toDo = [];
const ul = document.getElementsByClassName("todos")[0];
const form = document.getElementsByClassName("add-todo-form")[0];
debugger
export const addToDo = function () {
    form.addEventListener("submit", (e) => {
        debugger
        e.preventDefault();
        const input = document.getElementsByName("add-todo")[0];
        const inputValue = input.value();
        let toDoObj = {
            value: inputValue,
            done: false,
        }
        toDo.push(toDoObj);
        input.value("");

        populateList(toDo);
    });
};
//[obj, obj, obj3]
const li = document.createElement("li");

export const populateList = function (toDo) {
    (toDo).forEach( obj => {
        let label = document.createElement("label");
        label.innerHTML = toDo[obj]["value"];
        let checked = document.createElement("input");
        checked.setAttribute("type", "checkbox");
        let toDoLi = document.createElement("li");
        toDoLi.append(checked);
        toDoLi.append(label);
        ul.append(toDoLi);
    })
}