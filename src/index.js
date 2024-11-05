//Entering and displaying tasks
function displayTask(events) {
  events.preventDefault();

  let writtenTask = document.querySelector("#task");
  let allTodos = document.querySelector("#toDos");
  const displayedTask = document.createElement("div");
  const closeSign = document.createElement("span");
  closeSign.innerHTML = "\u00d7";
  closeSign.classList.add("closeSign");
  //"\u00d7"
  writtenTask = writtenTask.value;

  displayedTask.classList.add("lists");

  displayedTask.innerHTML = `<input type = checkbox id = ${taskNum} class = "checkedEmoji checkingBox"  >
  <label for = ${taskNum} class = "theTask allTask incomplete " >${writtenTask}</label>`;
  displayedTask.appendChild(closeSign);
  allTodos.appendChild(displayedTask);
  taskNum = taskNum + 1;
  document.getElementById("task").value = "";
  saveTasks();
}

//checking and removing task
let completedTask = document.querySelector(".toDos");
completedTask.addEventListener("click", function (event) {
  if (event.target.tagName === "INPUT") {
    let taskId = event.target.id;
    const checkbox = document.getElementById(taskId);

    if (checkbox.checked) {
      const associatedLabel = document.querySelector(`label[for="${taskId}"]`);
      if (associatedLabel) {
        associatedLabel.classList.add("completed");
      }
    } else {
      const associatedLabel = document.querySelector(`label[for="${taskId}"]`);
      if (associatedLabel) {
        associatedLabel.classList.remove("completed");
      }
    }
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
  }
  saveTasks();
});

//displaying all tasks
let displayAll = document.querySelector("#all");
displayAll.addEventListener("click", function (events) {
  events.target.classList.add("selected");
  let deselectComplete = document.querySelector("#completed");
  deselectComplete.classList.remove("selected");
  let deselectIncomplete = document.querySelector("#incomplete");
  deselectIncomplete.classList.remove("selected");

  const tasks = document.querySelectorAll(".lists"); // Select all task divs
  tasks.forEach((task) => {
    const checkbox = task.querySelector(".checkedEmoji");
    const closeSign = task.querySelector(".closeSign");
    const label = task.querySelector(".theTask");

    if (label.classList.contains("none")) {
      label.classList.remove("none"); // Ensure completed tasks are visible
      checkbox.style.display = "block"; // Show checkbox
      closeSign.style.display = "inline"; // Show close sign
      task.classList.remove("none");
    }
  });
});

//diplaying complited tasks
let displayCompleted = document.querySelector("#completed");
displayCompleted.addEventListener("click", function (events) {
  events.target.classList.add("selected");
  let deselectAll = document.querySelector("#all");
  deselectAll.classList.remove("selected");
  let deselectIncomplete = document.querySelector("#incomplete");
  deselectIncomplete.classList.remove("selected");

  const tasks = document.querySelectorAll(".lists"); // Select all task divs
  tasks.forEach((task) => {
    const checkbox = task.querySelector(".checkedEmoji");
    const closeSign = task.querySelector(".closeSign");
    const label = task.querySelector(".theTask");

    if (!label.classList.contains("completed")) {
      label.classList.add("none"); // Add "none" class if task is not completed
      checkbox.style.display = "none"; // Hide checkbox
      closeSign.style.display = "none"; // Hide close sign
      task.classList.add("none");
    } else {
      label.classList.remove("none"); // Ensure completed tasks are visible
      checkbox.style.display = "block"; // Show checkbox
      closeSign.style.display = "inline"; // Show close sign
      task.classList.remove("none");
    }
  });
});

//displaying incomplete tasks
let displayincomplete = document.querySelector("#incomplete");
displayincomplete.addEventListener("click", function (events) {
  events.target.classList.add("selected");
  let deselectAll = document.querySelector("#all");
  deselectAll.classList.remove("selected");
  let deselectComplete = document.querySelector("#completed");
  deselectComplete.classList.remove("selected");
  const tasks = document.querySelectorAll(".lists"); // Select all task divs
  tasks.forEach((task) => {
    const checkbox = task.querySelector(".checkedEmoji");
    const closeSign = task.querySelector(".closeSign");
    const label = task.querySelector(".theTask");

    if (label.classList.contains("completed")) {
      label.classList.add("none"); // Add "none" class if task is not completed
      checkbox.style.display = "none"; // Hide checkbox
      closeSign.style.display = "none"; // Hide close sign
      task.classList.add("none");
    } else {
      label.classList.remove("none"); // Ensure completed tasks are visible
      checkbox.style.display = "block"; // Show checkbox
      closeSign.style.display = "inline"; // Show close sign
      task.classList.remove("none");
    }
  });
});

//saving to local disk
function saveTasks() {
  let tasks = [];
  let allTodos = document.querySelector("#toDos");

  allTodos.querySelectorAll(".lists").forEach(function (item) {
    const taskText = item.querySelector(".theTask").textContent.trim();
    const checkbox = item.querySelector(".checkedEmoji");
    const isChecked = checkbox.checked; // Get the checked state

    // Store each task as an object with text and completion status
    tasks.push({
      text: taskText,
      completed: isChecked,
    });
  });

  // Save tasks to localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Loading Tasks
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    const allTodos = document.querySelector("#toDos");
    const displayedTask = document.createElement("div");
    const closeSign = document.createElement("span");
    closeSign.innerHTML = "\u00d7";
    closeSign.classList.add("closeSign");

    displayedTask.classList.add("lists");
    const currentTaskId = taskNum; // Use current taskNum for the checkbox ID

    // Set the checkbox to checked if the task is completed
    const checkedAttribute = task.completed ? "checked" : "";

    displayedTask.innerHTML = `
      <input type="checkbox" id="${currentTaskId}" class="checkedEmoji checkingBox" ${checkedAttribute}>
      <label for="${currentTaskId}" class="theTask allTask incomplete ${
      task.completed ? "completed" : ""
    }">${task.text}</label>
    `;

    displayedTask.appendChild(closeSign);
    allTodos.appendChild(displayedTask);

    taskNum++;
  });
}

window.onload = loadTasks;
let taskNum = 0;
//Entering task
let addedTask = document.querySelector("form");
addedTask.addEventListener("submit", displayTask);
