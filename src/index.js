/*function displayTask(events) {
  events.preventDefault();

  let writtenTask = document.querySelector("#task");
  let allTodos = document.querySelector("#toDos");
  const displayedTask = document.createElement("div");

  writtenTask = writtenTask.value;
  AllTask.push(writtenTask);
  incomplteTask.push(writtenTask);
  displayedTask.classList.add("lists");
  displayTask.id = "lists";
  displayTask.name = "lists";

  displayedTask.innerHTML = ` <div class="emoji"></div>
  <div class="theTask">${writtenTask}</div>`;
  allTodos.appendChild(displayedTask);
}

let AllTask = [];
let complitedTask = [];
let incomplteTask = [];
let addedTask = document.querySelector("form");
addedTask.addEventListener("submit", displayTask);

let completedTask = document.querySelector(".toDos");
completedTask.addEventListener("click", function (event) {
  event.target.classList.toggle("markedTask");
  let checked = document.querySelectorAll(".emoji");
  checked.style.backgroundImage =
    "url('https://cdn1.vectorstock.com/i/1000x1000/76/00/check-mark-icon-isolated-on-orange-background-vector-21547600.jpg')";
});
*/

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
  AllTask.push(writtenTask);
  incomplteTask.push(writtenTask);
  displayedTask.classList.add("lists");

  displayedTask.innerHTML = `<input type = checkbox id = ${taskNum} class = " checkedEmoji"  >
  <label for = ${taskNum} class = "theTask" >${writtenTask}</label>`;
  displayedTask.appendChild(closeSign);
  allTodos.appendChild(displayedTask);
  taskNum = taskNum + 1;
}
let taskNum = 0;
let AllTask = [];
let complitedTask = [];
let incomplteTask = [];
let addedTask = document.querySelector("form");
addedTask.addEventListener("submit", displayTask);

let completedTask = document.querySelector(".toDos");
completedTask.addEventListener("click", function (event) {
  event.target.classList.toggle("markedTask");
});
