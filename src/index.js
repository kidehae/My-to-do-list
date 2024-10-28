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
}
let taskNum = 0;
//Entering task
let addedTask = document.querySelector("form");
addedTask.addEventListener("submit", displayTask);
//checking and removing task
let completedTask = document.querySelector(".toDos");
completedTask.addEventListener("click", function (event) {
  if (event.target.tagName === "LABEL") {
    let taskId = event.target.getAttribute("for");
    const checkbox = document.getElementById(`${taskId}`);
    checkbox.addEventListener("click", function (events) {
      if (checkbox.checked) {
        //event.target.classList.remove("incomplete");
        //event.target.classList.add("completed");
        //event.target.classList.add("line");
        event.target.classList.add("completed");
      } else {
        // event.target.classList.remove("line");
        event.target.classList.remove("completed");
      }
    });
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
  }
});

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
    }
  });
});

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
    } else {
      label.classList.remove("none"); // Ensure completed tasks are visible
      checkbox.style.display = "block"; // Show checkbox
      closeSign.style.display = "inline"; // Show close sign
    }
  });
});

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
    } else {
      label.classList.remove("none"); // Ensure completed tasks are visible
      checkbox.style.display = "block"; // Show checkbox
      closeSign.style.display = "inline"; // Show close sign
    }
  });
});
