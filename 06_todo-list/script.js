const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const text = taskInput.value.trim();

  if (!text) return;

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  checkbox.type = "checkbox";
  checkbox.className = "task-check";
  span.className = "task-text";
  span.textContent = text;
  deleteBtn.textContent = "Delete";

  checkbox.addEventListener("change", () => {
    li.classList.toggle("done", checkbox.checked);
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.append(checkbox, span, deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addTask();
});
