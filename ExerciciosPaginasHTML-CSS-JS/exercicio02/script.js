const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const li = document.createElement("li");
    li.textContent = input.value;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    list.appendChild(li);
    input.value = "";
});
