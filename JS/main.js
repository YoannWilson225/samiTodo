const input = document.getElementById("todoInput");
const button = document.getElementById("addTodoButton");
const list = document.getElementById("todoList");

button.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li); //ici j'ajoute l'élément li à la liste
    input.value = ""; //ici j'efface le contenu de l'input après l'ajout
  }
});
