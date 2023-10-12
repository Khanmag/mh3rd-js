function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");

  if (todoInput.value.trim() !== "") {
    const todoItem = document.createElement("li");
    todoItem.innerText = todoInput.value;
    todoItem.addEventListener("click", toggleTodo);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Удалить";
    deleteButton.addEventListener("click", deleteTodo);

    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);

    todoInput.value = "";
  }
}

function toggleTodo() {
  this.classList.toggle("completed");
}

function deleteTodo() {
  this.parentNode.remove();
}
