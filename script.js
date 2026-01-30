const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
 const taskText = taskInput.value;

 if (taskText === "") {
 alert("Digite uma tarefa!");
 return;
 }

 const li = document.createElement("li");
 li.textContent = taskText;

 li.addEventListener("click", () => {
 li.style.textDecoration = "line-through";
 });

 taskList.appendChild(li);
 taskInput.value = "";
}