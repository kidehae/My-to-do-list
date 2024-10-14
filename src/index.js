function displayTask(events) {
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
  event.target.classList.add("markedTask");
  event.target.style.emoji.backgroundImage =
    "url('https://cdn1.vectorstock.com/i/1000x1000/76/00/check-mark-icon-isolated-on-orange-background-vector-21547600.jpg')";
});
