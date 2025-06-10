// Load tasks from localStorage when page loads
window.onload = function () {
  loadTasks();
};

function addNewTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("task-list");

  // Create new task element
  const li = document.createElement("li");
  li.textContent = taskText;
  li.onclick = () => {
    li.classList.toggle("done");
    saveTasks(); // Save changes when toggled
  };

  taskList.appendChild(li);
  taskInput.value = "";

  saveTasks(); // Save the updated list
}

function saveTasks() {
  const tasks = [];
  const taskItems = document.querySelectorAll("#task-list li");
  taskItems.forEach((li) => {
    tasks.push({ text: li.textContent, done: li.classList.contains("done") });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  savedTasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;
    if (task.done) li.classList.add("done");
    li.onclick = () => {
      li.classList.toggle("done");
      saveTasks();
    };
    taskList.appendChild(li);
  });
}
