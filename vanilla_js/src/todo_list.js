let toDo = [];
const ul = document.getElementsByClassName("todos")[0];
const form = document.getElementsByClassName("add-todo-form")[0];

export const addToDo = function () {
  form.addEventListener("submit", () => {
    const input = document.getElementsByName("add-todo")[0];
    const inputValue = input.value();
  });
};
